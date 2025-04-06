import { useEffect, useRef, useState } from "react";
import { FaHandshake} from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { motion, useAnimation, useInView } from "framer-motion";

const AnimatedStatCard = ({ icon, value, label, desc, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const targetValue = parseInt(value);
  const [count, setCount] = useState(0);

  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const progress = (count / 100) * circumference;
  const strokeDashoffset = circumference - progress;

  useEffect(() => {
    if (!isInView) return;
    controls.start("visible");

    let start = 0;
    const duration = 1000;
    const step = Math.ceil(targetValue / (duration / 16));

    const interval = setInterval(() => {
      start += step;
      if (start >= targetValue) {
        start = targetValue;
        clearInterval(interval);
      }
      setCount(start);
    }, 16);

    return () => clearInterval(interval);
  }, [isInView, targetValue, controls]);

  return (
    <motion.div
      ref={ref}
      className="bg-[#000] p-8 rounded-xl relative shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
    >
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <div className="relative w-16 h-16">
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
            <circle
              cx="32"
              cy="32"
              r="24"
              stroke="#444"
              strokeWidth="4"
              fill="none"
              className="opacity-30"
            />
            <motion.circle
              cx="32"
              cy="32"
              r="24"
              stroke="#fff"
              strokeWidth="4"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1 }}
            />
          </svg>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="bg-[#e3b843] w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-black">
              {icon}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-[#e3b843] text-xl font-bold">{count}%</p>
        <h3 className="text-lg font-semibold mt-1 mb-2 text-white">{label}</h3>
        <p className="text-sm text-gray-400">{desc}</p>
      </div>
    </motion.div>
  );
};

const Cta = () => {
  const stats = [
    {
      icon: <FaHandshake className="text-black text-2xl" aria-label="handshake icon" />,
      value: "100",
      label: "Clients",
      desc: "Top-rated by over 250 global clients",
    },
    {
      icon: <TbTruckDelivery className="text-black text-2xl" aria-label="delivery icon" />,
      value: "95",
      label: "Delivery",
      desc: "95% on-time, on-budget project success",
    },
    {
      icon: <IoTime className="text-black text-2xl" aria-label="time icon"/>,
      value: "85",
      label: "Uptime",
      desc: "Enterprise-grade 99.99% uptime guarantee",
    },
    {
      icon: <MdOutlineSupportAgent className="text-black text-2xl" aria-label="support icon"/>,
      value: "90",
      label: "Support",
      desc: "4.9/5 average support satisfaction score",
    },
  ];

  return (
    <div className="w-[80%] mt-15 justify-self-center rounded-4xl bg-[#1A1A1A] py-16 px-4 text-white text-center">
     <div class="text-center mb-10">
      <h2 class="text-sm title-font text-gray-500 font-medium tracking-widest uppercase">Our Impact</h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4 capitalize">Driving Results Through Innovation</h1>
      
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-[#e3b843] inline-flex"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <AnimatedStatCard key={index} {...stat} delay={index * 0.2} />
        ))}
      </div>
    </div>
  );
};

export default Cta;
