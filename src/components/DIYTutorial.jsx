import { motion } from "framer-motion";

const DIYTutorial = ({ steps }) => {
  return (
    <div style={{ marginTop: "1rem" }}>
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          style={{
            background: "#f9f9f9",
            padding: "1rem",
            borderRadius: "10px",
            marginBottom: "1rem"
          }}
        >
          <h3>Step {index + 1}: {step.title}</h3>
          <p>{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default DIYTutorial;
