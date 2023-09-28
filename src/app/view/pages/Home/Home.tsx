import ProjectCard from "../../components/ProjectCard/ProjectCard";
import workingImage from "../../../assets/working_image.jpg";
import arrowIcon from "../../../assets/arrow_icon.png";
import "./Home.css";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [dropdownText, setDropdownText] = useState<String>(
    "Visualizar trabalhos como"
  );

  const refDropdown = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!refDropdown.current!.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    });
  }, []);

  return (
    <>
      <main id="home">
        <div>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            ref={refDropdown}
          >
            <p>{dropdownText}</p>
            <img
              src={arrowIcon}
              style={isDropdownOpen ? { transform: "scale(1, -1)" } : {}}
              alt="Ícone de flecha"
            />
            {isDropdownOpen ? <section>
              <option
                value="advisor"
                onClick={(event) => {
                  setDropdownText(event.currentTarget.innerHTML);
                }}
              >
                Professor orientador
              </option>
              <option
                value="responsible"
                onClick={(event) => {
                  setDropdownText(event.currentTarget.innerHTML);
                }}
              >
                Professor responsável
              </option>
            </section> : null}
            
          </button>
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
