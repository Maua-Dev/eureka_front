import ProjectCard from "../../components/ProjectCard/ProjectCard";
import workingImage from "../../../assets/working_image.jpg";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <main id="home">
        <div>
          <select>
            <option value="" disabled selected hidden>
              Visualizar trabalhos como
            </option>
            <option value="advisor">Professor orientador</option>
            <option value="responsible">Professor responsável</option>
          </select>
        </div>
        <ProjectCard
          image={workingImage}
          teacherAdvisor="Ana Paula"
          title="DSG - Design universal aplicado em embalagem de protetor solar"
        />
        <ProjectCard
          image={workingImage}
          teacherAdvisor="Ana Paula"
          title="DSG - Design universal aplicado em embalagem de protetor solar"
        />
        <ProjectCard
          image={workingImage}
          teacherAdvisor="Ana Paula"
          title="DSG - Design universal aplicado em embalagem de protetor solar"
        />
      </main>
    </>
  );
}
