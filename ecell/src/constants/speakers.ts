// speakers.ts

export interface Speaker {
  id: number;
  name: string;
  image: string;
  about: string;
}

export const speakers: Speaker[] = [
  {
    id: 1,
    name: "Sandeep Jain",
    image: "/images/speakers/SandeepJain.jpeg",
    about: "Founder of GeeksforGeeks"
  },
  {
    id: 2,
    name: "Amit Lodha",
    image: "/images/speakers/amit.jpg",
    about: "Additional Director General of Police (ADGP), IPS Officer"
  },
  {
    id: 3,
    name: "Dr. Praveen Sinha",
    image: "/images/speakers/praveensinha.jpg",
    about: "CEO, Tata Power"
  },
  {
    id: 4,
    name: "Dr. Tanu Jain",
    image: "/images/speakers/tanujain.jpeg",
    about: "Former Bureaucrat, Founder of Tathastu ICS"
  },
  {
    id: 5,
    name: "Suresh Narasimha",
    image: "/images/speakers/Suresh.jpg",
    about: "Deep Tech Idea Stage Investor"
  },
  {
    id: 6,
    name: "Anubhav Dubey",
    image: "/images/speakers/anubhav.jpeg",
    about: "Founder of Chai Sutta Bar"
  },
];