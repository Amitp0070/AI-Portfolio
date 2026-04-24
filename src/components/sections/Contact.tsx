import { useState } from 'react';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { BsGithub, BsLinkedin, BsEnvelope } from 'react-icons/bs';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // ✅ VALIDATION
  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email required';
      isValid = false;
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = 'Minimum 10 characters required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // ✅ SUBMIT (REAL EMAIL)


  const handleSubmit = async (e: React.FormEvent) => {
    // console.log("FORM SUBMIT TRIGGERED");
    e.preventDefault();
    setSuccess(false);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_6qp9huu',       // 🔥 your service id
        'template_1jlpyui',     // 🔥 replace with your template id
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        '1tknnDPJh8rkPn4fV'     // ✅ your public key
      );

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSuccess(false), 4000);

    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Error sending message');
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>

      {/* HEADER */}
      <div className="text-center mb-5">
        <p style={{ color: 'var(--accent-color)', letterSpacing: '2px' }}>
          CONTACT
        </p>

        <h2 className="fw-bold mb-3">
          Let’s Work Together 🚀
        </h2>

        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Have a project idea or need backend expertise? Let’s build something scalable and powerful.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Row className="g-4 justify-content-center">

          {/* LEFT SIDE */}
          <Col lg={4}>
            <div
              style={{
                borderRadius: '20px',
                background: 'var(--card-gradient)',
                border: '1px solid var(--card-border)',
                boxShadow: 'var(--card-shadow)',
                padding: '25px',
                height: '100%'
              }}
            >
              <h5 className="fw-bold mb-3">Connect With Me</h5>

              <p style={{ color: 'var(--text-secondary)' }}>
                Open for freelance, collaboration, or full-time opportunities.
              </p>

              <div className="d-flex flex-column gap-3 mt-4">

                {[
                  {
                    icon: <BsEnvelope />,
                    text: 'amitpathak8327@gmail.com'
                  },
                  {
                    icon: <BsGithub />,
                    text: 'GitHub Profile',
                    link: 'https://github.com/Amitp0070'
                  },
                  {
                    icon: <BsLinkedin />,
                    text: 'LinkedIn Profile',
                    link: 'https://www.linkedin.com/in/amit-pathak-558971277/'
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="d-flex align-items-center gap-3"
                    style={{
                      padding: '12px',
                      borderRadius: '12px',
                      cursor: item.link ? 'pointer' : 'default'
                    }}
                    onClick={() => {
                      if (item.link) window.open(item.link, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                        color: '#fff'
                      }}
                    >
                      {item.icon}
                    </div>

                    <span style={{ color: 'var(--text-color)' }}>
                      {item.text}
                    </span>
                  </div>
                ))}

              </div>
            </div>
          </Col>

          {/* RIGHT FORM */}
          <Col lg={8}>
            <div
              style={{
                borderRadius: '20px',
                background: 'var(--card-gradient)',
                border: '1px solid var(--card-border)',
                boxShadow: 'var(--card-shadow)',
                padding: '25px'
              }}
            >
              {success && (
                <Alert variant="success">
                  Message sent successfully 🚀
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>

                <Row className="g-3">

                  <Col md={6}>
                    <Form.Control
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                      className="p-3"
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                      className="p-3"
                    />
                  </Col>

                </Row>

                <Form.Control
                  as="textarea"
                  rows={6}
                  name="message"
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                  className="mt-3 p-3"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-100 mt-4 py-3 fw-bold border-0"
                  style={{
                    borderRadius: '999px',
                    background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))'
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

              </Form>
            </div>
          </Col>

        </Row>
      </motion.div>
    </div>
  );
};

export default Contact;