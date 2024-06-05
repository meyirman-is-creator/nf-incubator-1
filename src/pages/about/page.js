/* eslint-disable react/no-unescaped-entities */
import Layout from "../../app/layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const About = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
          Welcome to My Blog! We are dedicated to bringing you the latest news
          and updates on a variety of topics. Our team of writers works
          tirelessly to provide you with high-quality content that is both
          informative and engaging.
        </p>
        <p className="mb-4">
          Our mission is to create a platform where readers can find reliable
          information and insightful commentary on current events, trends, and
          more. Whether you're here for the latest news, tips, or just to read
          some interesting articles, we have something for everyone.
        </p>
        <p className="mb-4">
          Thank you for visiting our blog. We hope you enjoy your time here and
          find our content valuable. If you have any questions or feedback,
          please feel free to reach out to us through our contact page.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
        <p className="mb-4">
          Our team consists of experienced writers and editors who are
          passionate about delivering quality content. Meet the people behind My
          Blog:
        </p>
        <ul className="list-disc pl-5">
          <li className="mb-2">
            <strong>Baurma</strong> - Technology and Lifestyle Writer
          </li>
          <li className="mb-2">
            <strong>Daulet Issatayev</strong> - Health and Wellness Writer
          </li>
          <li className="mb-2">
            <strong>Madina</strong> - Entertainment and Meme Specialist
          </li>
          <li className="mb-2">
            <strong>Alibek Seitov</strong> - Education and Productivity Writer
          </li>
          <li className="mb-2">
            <strong>Uldana</strong> - Social Media and Viral Content Specialist
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;
