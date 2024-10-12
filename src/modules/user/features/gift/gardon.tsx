
import React, { CSSProperties } from "react";
import { motion } from "framer-motion";

const gifts = [
  "ویسا",
  "بازرگام",
  "مفتول",
  "خاتم",
  "ترمه",
  "بتیس",
  "خاتم",
  "ویسا",
];

const styles: { [key: string]: CSSProperties } = {
  circleContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "70px",
  },
  circle: {
    position: "relative",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    overflow: "hidden",
    backgroundColor: "#ffffff",
  },
  segment: {
    position: "absolute",
    width: "50%",
    height: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transformOrigin: "100% 100%",
    backgroundColor: "rgba(0, 128, 255, 0.3)",
    clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
  },
  number: {
    fontSize: "24px",
    color: "#3b82f6",
    transform: "rotate(-22.5deg)",
    textAlign: "center",
    fontWeight: "bold",
    padding: "10px",
    background: "rgba(255, 255, 255, 0.8)",
    borderRadius: "5px",
  },
};

const WheelOfLuck: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <div style={styles.circleContainer}>
        <motion.div
          id="circle"
          style={styles.circle}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {gifts.map((prize, index) => (
            <div
              key={index}
              style={{
                ...styles.segment,
                transform: `rotate(${index * 45}deg)`,
              }}
            >
              <span style={styles.number}>{prize}</span>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="mt-10 text-center">

        <p className="text-lg text-gray-600">برای اعلان و دریافت جایزه خود روی گردونه کلیک کنید</p>

      </div>
    </div>
  );
};

export default WheelOfLuck;
