import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// template_wka33xa
// service_h1rxso6
// QSgrBt05cJa9q090w

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [hasError, setHasError] = useState({
    name: true,
    email: true,
    message: true,
  });
  const [isFocus, setIsFocus] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [loading, setLoading] = useState(false);

  const btnIsDisabled = hasError.name || hasError.email || hasError.message;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (value === "") {
      setHasError((prev) => ({ ...prev, [name]: true }));
    } else {
      setHasError((prev) => ({ ...prev, [name]: false }));
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (hasError.name || hasError.email || hasError.message) return;

    setLoading(true);

    emailjs
      .send(
        "service_h1rxso6",
        "template_wka33xa",
        {
          form_name: form.name,
          to_name: "Chen Yuan",
          from_email: form.email,
          to_email: "realchenyuan0901@gmail.com",
          message: form.message,
        },
        "QSgrBt05cJa9q090w"
      )
      .then(() => {
        setLoading(false);
        alert("感谢您的建议，我将会尽快与您联系");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        alert("出错了，请重试");
      });
  };

  return (
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse
     flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>联系我</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">您的名字</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onBlur={() => {
                setIsFocus((prev) => ({ ...prev, name: true }));
              }}
              onChange={handleChange}
              placeholder="请输入您的名字"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outline-none border-none font-medium"
            />
            {hasError.name && isFocus.name && (
              <p className=" text-red-500 mt-1">名字不能为空</p>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">您的邮箱</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={() => {
                setIsFocus((prev) => ({ ...prev, email: true }));
              }}
              placeholder="请输入您的邮箱"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outline-none border-none font-medium"
            />
            {hasError.email && isFocus.email && (
              <p className=" text-red-500 mt-1">邮箱不能为空</p>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">您的建议</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              onBlur={() => {
                setIsFocus((prev) => ({ ...prev, message: true }));
              }}
              placeholder="请输入您的建议"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outline-none border-none font-medium"
            />
            {hasError.message && isFocus.message && (
              <p className=" text-red-500 mt-1">内容不能为空</p>
            )}
          </label>

          <button
            type="submit"
            className="bg-white py-3 px-8 outline-none w-fit text-tertiary font-bold shadow-md shadow-primary rounded-xl mx-auto disabled:opacity-80 disabled:cursor-not-allowed"
            disabled={btnIsDisabled}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
