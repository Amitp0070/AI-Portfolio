import { useState } from 'react';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { BsGithub, BsLinkedin, BsEnvelope } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);

    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Hide success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <>
      <h2 className="text-center mb-5 fw-bold" style={{ color: 'var(--text-color)' }}>Get In Touch</h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <Row className="justify-content-center mx-auto" style={{ maxWidth: '1000px' }}>
          <Col lg={4} className="mb-4 mb-lg-0">
            <div className="h-100 p-4 rounded shadow-sm d-flex flex-column" style={{ backgroundColor: 'var(--card-bg, var(--bg-color))' }}>
              <h4 className="fw-bold mb-4" style={{ color: 'var(--text-color)' }}>Let's Connect</h4>
              <p className="mb-4" style={{ color: 'var(--text-color)', opacity: 0.9 }}>
                Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="d-flex flex-column gap-3 mt-auto">
                <a href="mailto:hello@example.com" className="text-decoration-none d-flex align-items-center gap-3" style={{ color: 'var(--text-color)' }}>
                  <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(13, 110, 253, 0.1)' }}>
                    <BsEnvelope size={20} style={{ color: 'var(--primary-color)' }} />
                  </div>
                  <span>hello@example.com</span>
                </a>
                
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-decoration-none d-flex align-items-center gap-3" style={{ color: 'var(--text-color)' }}>
                  <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(13, 110, 253, 0.1)' }}>
                    <BsGithub size={20} style={{ color: 'var(--primary-color)' }} />
                  </div>
                  <span>GitHub Profile</span>
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-decoration-none d-flex align-items-center gap-3" style={{ color: 'var(--text-color)' }}>
                  <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(13, 110, 253, 0.1)' }}>
                    <BsLinkedin size={20} style={{ color: 'var(--primary-color)' }} />
                  </div>
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </Col>
          
          <Col lg={8}>
            <div className="p-4 rounded shadow-sm" style={{ backgroundColor: 'var(--card-bg, var(--bg-color))' }}>
              {success && (
                <Alert variant="success" className="mb-4 border-0 shadow-sm">
                  Message sent successfully! I will get back to you soon.
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit} noValidate>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="contactName">
                      <Form.Label style={{ color: 'var(--text-color)' }}>Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                        placeholder="John Doe"
                        style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)', borderColor: 'var(--bg-color)' }}
                        className="p-3 border"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="contactEmail">
                      <Form.Label style={{ color: 'var(--text-color)' }}>Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        placeholder="john@example.com"
                        style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)', borderColor: 'var(--bg-color)' }}
                        className="p-3 border"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4" controlId="contactMessage">
                  <Form.Label style={{ color: 'var(--text-color)' }}>Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                    placeholder="Your message here..."
                    style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)', borderColor: 'var(--bg-color)' }}
                    className="p-3 border"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-100 py-3 fw-bold border-0"
                  style={{ backgroundColor: 'var(--primary-color)' }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </motion.div>
    </>
  );
};

export default Contact;
