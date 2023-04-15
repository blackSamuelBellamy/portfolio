import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: localStorage.getItem('name') ||  '',
    email: localStorage.getItem('email') ||   '',
    message: localStorage.getItem('message') || ''
  });

  const { name, email, message } = form;

  useEffect(() => {
    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
    localStorage.setItem('message', message)
  }, [form])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  
    const emailValidation = () => {
      const mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
      const Rex = new RegExp(mail);
      return Rex.test(email);
    }

    const all = [name, email, message]

   if(all.some(x => x.trim() === '')) {
      Swal.fire({
        icon: "info",
        title: "Complete todos los campos requeridos",
        showConfirmButton: false,
        timer: 2000,
    }) 
  } else if (!emailValidation()) {
    Swal.fire({
      icon: "info",
      title: "ingrese un email válido por favor",
      showConfirmButton: false,
      timer: 2000,
    })
  } else {
    setLoading(true)
    emailjs.send(
      import.meta.env.VITE_SERVICE, 
      import.meta.env.VITE_TEMPLATE, 
      {
        from_name: name,
        to_name: 'Alejandro',
        from_email: email,
        to_email: import.meta.env.VITE_EMAIL,
        message: message + '  ' + email
      },
      import.meta.env.VITE_KEY
      ).then(() => {
        Swal.fire({
        icon: "success",
        title: "Me pondré en contacto contigo a la brevedad, Saludos!",
        showConfirmButton: false,
        timer: 2000,
        })
        setForm({
          name: '',
          email: '',
          message: ''
        })
        setLoading(false)
      }).catch(() => {
        Swal.fire({
        icon: "error",
        title: "Ocurrió un problema, intentalo más tarde.",
        showConfirmButton: false,
        timer: 2000,
        })
        setLoading(false)
      })
  } 
    
  }; 

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.heroSubText}>Escríbeme</p>
        <h3 className={styles.sectionHeadText}>Contacto</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Tu Nombre</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Como te llamas ?"
              className="bg-tertiary py-4 px-6  placeholder:text-secondary  text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Tu Email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Dime tu correo"
              className="bg-tertiary py-4 px-6  placeholder:text-secondary  text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Tu Mensaje</span>
            <textarea
              rows='7'
              name="message"
              value={message}
              onChange={handleChange}
              placeholder="Dime como puedo ayudarte"
              className="bg-tertiary py-4 px-6 resize-none placeholder:text-secondary  text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary cursor-pointer py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Enviando...': 'Enviar'}
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
