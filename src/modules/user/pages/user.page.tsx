import { useState, useRef, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import GiftReward from "../features/gift/mainGift";
import GreetingsSection from "../features/greetings/greetings";
import QaPage from "../features/Qa/Qa.page";
import usePostGift from "../service/useGift";
import { useNavigate, useParams } from "react-router-dom";

const UserPage = () => {
  const [goToQa, setGoToQa] = useState(false);
  const [testFinished, setTestFinished] = useState(false);
  const qaRef = useRef<HTMLDivElement | null>(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
  const navigate = useNavigate();

  const { uuid } = useParams<{ uuid: string }>();
  const { data: giftData, error, isError, mutate } = usePostGift(uuid);

  const handleClick = () => {
    setGoToQa(true);
  };

  const handleTestFinish = () => {
    setTestFinished(true);
    if (uuid) {
      mutate(correctAnswersCount, {
        onError: (error: Error) => {
          if (error instanceof Response && error.status === 400) {
            navigate("/");
          }
        },
      });
    } else {
      console.error("UUID is missing");
    }
  };

  useEffect(() => {
    if (goToQa && qaRef.current) {
      qaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [goToQa]);

  return (
    <>
      {!goToQa && !testFinished && (
        <GreetingsSection handleClick={handleClick} />
      )}
      {!testFinished && goToQa && (
        <QaPage
          onFinishTest={handleTestFinish}
          correctAnswersCount={correctAnswersCount}
          setCorrectAnswersCount={setCorrectAnswersCount}
        />
      )}
      {testFinished && giftData && <GiftReward giftData={giftData} correctAnswersCount={correctAnswersCount} />}
      {isError && <div>Error occurred: {error?.message}</div>}
    </>
  );
};

export default UserPage;
