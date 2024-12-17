import { Injectable } from '@angular/core';

interface Reference {
  en: string;
  de: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {
  private references: Reference[] = [
    {
      en: "During a joint project, I was able to appreciate the excellent collaboration with Marco. His reliability and organizational skills were impressive. Furthermore, his motivating nature significantly contributed to the success of our team.",
      de: "Im Rahmen eines gemeinsamen Projekts konnte ich die exzellente Zusammenarbeit mit Marco schätzen. Seine Zuverlässigkeit und organisatorischen Fähigkeiten waren beeindruckend. Darüber hinaus hat er durch seine motivierende Art maßgeblich zum Erfolg unseres Teams beigetragen.",
      author: "Tümay Batman"
    },
    {
      en: "Working with Marco has always been a positive experience. He not only possesses profound knowledge but also has a keen eye for detail. I particularly appreciate that he often thinks beyond his own area of responsibility, bringing new approaches to the team. His foresight has repeatedly provided valuable impulses to the project.",
      de: "Mit Marco zusammenzuarbeiten, war stets eine positive Erfahrung. Er hat nicht nur fundiertes Wissen, sondern auch ein gutes Auge für Details. Ich schätze besonders, dass er oft über den eigenen Aufgabenbereich hinausdenkt und damit neue Ansätze ins Team bringt. Seine Weitsicht hat dem Projekt immer wieder hilfreiche Impulse gegeben.",
      author: "Richard Streu"
    },
    {
      en: "Marco stands out for his outstanding organizational skills and a clear, structured approach to work. He is always reliable, extremely punctual, and understands how to plan tasks efficiently and goal-oriented. His leadership skills are evident in his motivating interaction with the team and his ability to successfully bring projects to completion.",
      de: "Marco zeichnet sich durch herausragende organisatorische Fähigkeiten und eine klare, strukturierte Arbeitsweise aus. Er arbeitet stets zuverlässig, ist äußerst pünktlich und versteht es, Aufgaben effizient und zielorientiert zu planen. Seine Führungskompetenz zeigt sich in einem motivierenden Umgang mit dem Team und der Fähigkeit, Projekte erfolgreich zum Abschluss zu bringen.",
      author: "Murat Catili"
    },
    {
      en: "Marco advocated for an appealing and user-friendly design and contributed to improving the project’s functionality with his JavaScript expertise. The collaboration was always pleasant and goal-oriented.",
      de: "Marco hat sich für ein ansprechendes und benutzerfreundliches Design eingesetzt und durch seine JavaScript-Kenntnisse zur Verbesserung der Funktionalität des Projekts beigetragen. Die Zusammenarbeit war stets angenehm und zielführend.",
      author: "Mirko Rinke"
    },
    {
      en: "Marco is an extremely valuable team member whose profound knowledge and keen eye for detail significantly enrich project work. His ability to think outside the box brings innovative ideas and fresh perspectives to our team. His foresight and constructive approach make him an outstanding project partner.",
      de: "Marco ist ein überaus wertvolles Teammitglied, dessen fundiertes Wissen und ausgeprägter Blick für Details die Projektarbeit maßgeblich bereichern. Seine Fähigkeit, über den eigenen Tellerrand hinauszudenken, bringt innovative Impulse und neue Perspektiven in unser Team. Seine Weitsicht und konstruktive Herangehensweise machen ihn zu einem herausragenden Projektpartner.",
      author: "David Werner"
    }
  ]

  getReferences(): Reference[] {
    return this.references;
  }
}
