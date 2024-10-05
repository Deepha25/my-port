import React, { useState } from 'react';
import './MainPage.css';
import pro from '../components/images/profile.jpg';
import project1 from '../components/images/pro1.png';
import project2 from '../components/images/pro2.png';
import project3 from '../components/images/pro3.png';
import project4 from '../components/images/pro4.png';
import emailjs from 'emailjs-com';

const MainPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send('service_gwcflam', 'template_nk620wo', formData, 'ER5pRZ32qiks7zZ_n')
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
                alert("Message sent successfully!");
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                alert("Failed to send message. Please try again later.");
            });

        setFormData({ name: '', email: '', message: '' }); // Clear form after submission
    };

    return (
        <div>
            <section id="hero">
                <div className="hero-content">
                    <img src={pro} className="profile-image" alt="profile-img" />
                    <div>
                        <h1>Hello, I'm <span className="highlight">DEEPHA A</span></h1>
                        <p className="tagline">Passionate UI/UX Designer</p>
                    </div>
                </div>
            </section>
            <section id="about">
                <h2>About me</h2>
                <p>I am an enthusiastic UI/UX designer currently in my 3rd year of pursuing a Bachelor’s degree in Computer Science and Engineering at Francis Xavier Engineering College, Tirunelveli. My journey into design started with a passion for creating intuitive and engaging digital experiences. With a keen eye for aesthetics and a deep understanding of user behavior, I focus on crafting user interfaces that are not only visually appealing but also highly functional. My goal is to bridge the gap between technology and users by designing solutions that are both user-friendly and innovative. In addition to my academic pursuits, I have gained practical experience through internships and personal projects, where I honed my skills in various design tools and methodologies. I am always eager to learn and adapt to new challenges, aiming to continuously improve my design skills and contribute to creating outstanding user experiences.</p>
            </section>
            <section id="education">
             
      <h2>Education</h2>
      <div class="education-block">
        <h3>B.E Computer Science and Engineering (2022 - Present)</h3>
        <p>Francis Xavier Engineering College, Tirunelveli</p>
        <p><b>CGPA: 8.58 (Semester 4)</b></p>
      </div>

      <div class="education-block">
        <h3>Higher Secondary Education (2022)</h3>
        <p>Government Girls Higher Secondary School</p>
        <p><b>Percentage: 86%</b></p>
      </div>
    </section>

    <section id="internship">
      <h2>Internship Experience</h2>
      <div class="internship-block">
        <h3><b>Shristi Innovatives, Technopark, Trivandrum</b></h3>
        <p>
          I worked as an intern for 1 month at Shristi Innovatives Technopark,
          Trivandrum, where I gained hands-on experience in <b>UI/UX design</b>. During this 1 month
          internship, I learnt about various <b>design tools and tips</b> in <b>Figma</b>.
          I contributed to designing user interfaces, learned about user
          experience research methodologies, and collaborated with a team of
          developers and designers to <b>improve the functionality and
          user-friendliness of applications</b>.
        </p>
      </div>
    </section>
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        <li>UI/UX Design</li>
        <li>HTML & CSS (Intermediate)</li>
        <li>Python (Basics)</li>
        <li>Java (Basics)</li>
      </ul>
    </section>
    <section id="design">
    <h2>Designs</h2>
    <div class="design-grid">
        <div class="project-item">
            <a href="https://github.com/Deepha25/rep2/blob/main/elearn.png" target="_blank" rel="noopener noreferrer">
                <img src={project1} alt="pro1"/>
            </a>
            <div class="design-description">
                <p><strong>Elearning App</strong></p>
                <p>This UI/UX design was created for an e-learning platform. The focus was on developing a clean and engaging interface to help students easily access course content, track their progress, interact with instructors, and a progress tracker, all designed using Figma for a seamless user experience.</p>
                <a href="https://github.com/Deepha25/rep2/blob/main/elearn.png" target="_blank" rel="noopener noreferrer">
                    <button class="view-button">View Image</button>
                </a>
            </div>
        </div>

        <div class="project-item">
            <a href="https://github.com/Deepha25/rep2/blob/main/food.png" target="_blank" rel="noopener noreferrer">
                <img src={project2} alt="pro2"/>
            </a>
            <div class="design-description">
                <p><strong>Food App</strong></p>
                <p>This project focuses on a user-friendly food ordering app. The UI is designed to simplify the ordering process with a minimalistic layout, vibrant food imagery, and intuitive navigation. Features include customizing orders, and tracking deliveries. This design showcases how the app provides a smooth and efficient experience for users.</p>
                <a href="https://github.com/Deepha25/rep2/blob/main/food.png" target="_blank" rel="noopener noreferrer">
                    <button class="view-button">View</button>
                </a>
            </div>
        </div>

        <div class="project-item">
            <a href="https://github.com/Deepha25/rep2/blob/main/image.png" target="_blank" rel="noopener noreferrer">
                <img src={project3} alt="pro3"/>
            </a>
            <div class="design-description">
                <p><strong>Food App Home Page</strong></p>
                <p>The homepage design for a food delivery app focuses on welcoming users with visually appealing imagery and easy-to-use navigation. The design aims to capture the attention of users and encourage interaction, all crafted with Figma to ensure high usability and aesthetic appeal.</p>
                <a href="https://github.com/Deepha25/rep2/blob/main/image.png" target="_blank" rel="noopener noreferrer">
                    <button class="view-button">View</button>
                </a>
            </div>
        </div>

        <div class="project-item">
            <a href="https://github.com/Deepha25/rep2/blob/main/food.png" target="_blank" rel="noopener noreferrer">
                <img src={project4} alt="pro4"/>
            </a>
            <div class="design-description">
                <p><strong>Music App</strong></p>
                <p>The MuZic app is designed to offer an immersive and collaborative music experience along with user. With a sleek and intuitive interface, built with a user-centric approach, MuZic offers a streamlined, personalized experience for every music lover.</p>
                <a href="https://github.com/Deepha25/rep2/blob/main/food.png" target="_blank" rel="noopener noreferrer">
                    <button class="view-button">View </button>
                </a>
            </div>
        </div>
    </div>
</section>

   
<section id="contact">
    <h2>Contact</h2>
    <form onSubmit={sendEmail}>
        <div>
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
        </div>
        <div>
            <label>Email:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
        </div>
        <div>
            <label>Message:</label>
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            />
        </div>
        <button type="submit" className="view-button">Send Message</button>
    </form><br></br>
    <p align="center" ><b>Also Contact me via</b></p>
      <p align="center"><i class="fas fa-phone"></i> Phone: +91 6369387192</p>
      <p align="center">
        <i class="fab fa-linkedin"></i> LinkedIn:
        <a href="https://www.linkedin.com/in/deepha-a-57689725a">linkedin.com/in/deepha-a-57689725a</a>
      </p>
</section>



            <footer>
                <p>&copy; 2024 Deepha. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MainPage;
          


