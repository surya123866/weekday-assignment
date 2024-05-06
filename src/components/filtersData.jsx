const roles = [
  {
    label: "Engineering",
    color: "#0052CC",
    isDisabled: true,
    options: [
      {
        value: "ios",
        label: "ios",
        color: "#FF8B00",
      },
      {
        value: "android",
        label: "android",
        color: "#FF8B00",
      },
      {
        value: "frontend",
        label: "frontend",
        color: "#FF8B00",
      },
    ],
  },
  {
    label: "Sales",
    color: "#0052CC",
    isDisabled: true,
    options: [
      { value: "sales_manager", label: "Sales Manager", color: "#FF8B00" },
      { value: "sales_executive", label: "Sales Executive", color: "#FF8B00" },
      // Add more sales roles as needed
    ],
  },
  {
    label: "Marketing",
    color: "#0052CC",
    isDisabled: true,
    options: [
      {
        value: "marketing_manager",
        label: "Marketing Manager",
        color: "#FF8B00",
      },
      {
        value: "marketing_executive",
        label: "Marketing Executive",
        color: "#FF8B00",
      },
      // Add more marketing roles as needed
    ],
  },
  {
    label: "Human Resources",
    color: "#0052CC",
    isDisabled: true,
    options: [
      { value: "hr_manager", label: "HR Manager", color: "#FF8B00" },
      { value: "hr_executive", label: "HR Executive", color: "#FF8B00" },
      // Add more HR roles as needed
    ],
  },
  // Add more categories as needed
];

const experience = [
  {
    value: "1",
    label: "1",
    color: "#FF8B00",
  },
  {
    value: "2",
    label: "2",
    color: "#FF8B00",
  },
  {
    value: "3",
    label: "3",
    color: "#FF8B00",
  },
  {
    value: "4",
    label: "4",
    color: "#FF8B00",
  },
  {
    value: "5",
    label: "5",
    color: "#FF8B00",
  },
  {
    value: "6",
    label: "6",
    color: "#FF8B00",
  },
  {
    value: "7",
    label: "7",
    color: "#FF8B00",
  },
  {
    value: "8",
    label: "8",
    color: "#FF8B00",
  },
  {
    value: "9",
    label: "9",
    color: "#FF8B00",
  },
  {
    value: "10",
    label: "10",
    color: "#FF8B00",
  },
];

const workMode = [
  {
    value: "remote",
    label: "Remote",
    color: "#FF8B00",
  },
  {
    value: "hybrid",
    label: "Hybrid",
    color: "#FF8B00",
  },
  {
    value: "n-Office",
    label: "In-Office",
    color: "#FF8B00",
  },
];

const salary = [
  {
    value: 0,
    label: "0L",
    color: "#FF8B00",
  },
  {
    value: 10,
    label: "10L",
    color: "#FF8B00",
  },
  {
    value: 20,
    label: "20L",
    color: "#FF8B00",
  },
  {
    value: 30,
    label: "30L",
    color: "#FF8B00",
  },
  {
    value: 50,
    label: "50L",
    color: "#FF8B00",
  },
  {
    value: 60,
    label: "60L",
    color: "#FF8B00",
  },
  {
    value: 70,
    label: "70L",
    color: "#FF8B00",
  },
];
const locations = [
  {
    value: "bangalore",
    label: "Bangalore",
    color: "#FF8B00",
  },
  {
    value: "hyderabad",
    label: "Hyderabad",
    color: "#FF8B00",
  },
  {
    value: "chennai",
    label: "Chennai",
    color: "#FF8B00",
  },
  {
    value: "delhi ncr",
    label: "Delhi NCR",
    color: "#FF8B00",
  },
  {
    value: "mumbai",
    label: "Mumbai",
    color: "#FF8B00",
  },
  {
    value: "visakhapatnam",
    label: "Visakhapatnam",
    color: "#FF8B00",
  },
  {
    value: "trivandrum",
    label: "Trivandrum",
    color: "#FF8B00",
  },
  {
    value: "vadodara",
    label: "Vadodara",
    color: "#FF8B00",
  },
  {
    value: "patna",
    label: "Patna",
    color: "#FF8B00",
  },
  {
    value: "mysore",
    label: "Mysore",
    color: "#FF8B00",
  },
  {
    value: "indore",
    label: "Indore",
    color: "#FF8B00",
  },
  {
    value: "jaipur",
    label: "Jaipur",
    color: "#FF8B00",
  },
  {
    value: "mangalore",
    label: "Mangalore",
    color: "#FF8B00",
  },
  {
    value: "lucknow",
    label: "Lucknow",
    color: "#FF8B00",
  },
  {
    value: "coimbatore",
    label: "Coimbatore",
    color: "#FF8B00",
  },
  {
    value: "chandigarh",
    label: "Chandigarh",
    color: "#FF8B00",
  },
  {
    value: "bhubaneswar",
    label: "Bhubaneswar",
    color: "#FF8B00",
  },
  {
    value: "kochi",
    label: "Kochi",
    color: "#FF8B00",
  },
];

const techStacks = [
  {
    value: "LAMP",
    label: "LAMP Stack",
    color: "#FF8B00",
  },
  {
    value: "MEAN",
    label: "MEAN Stack",
    color: "#FF8B00",
  },
  {
    value: "MERN",
    label: "MERN Stack",
    color: "#FF8B00",
  },
  {
    value: "Django",
    label: "Django Stack",
    color: "#FF8B00",
  },
  {
    value: "RubyOnRails",
    label: "Ruby on Rails Stack",
    color: "#FF8B00",
  },
  {
    value: "Java",
    label: "Java Stack",
    color: "#FF8B00",
  },
  {
    value: "ASP.NET",
    label: "ASP.NET Stack",
    color: "#FF8B00",
  },
  {
    value: "Python",
    label: "Python Stack",
    color: "#FF8B00",
  },
  {
    value: "FullJavaScript",
    label: "Full JavaScript Stack",
    color: "#FF8B00",
  },
  {
    value: "Vue.js",
    label: "Vue.js Stack",
    color: "#FF8B00",
  },
  {
    value: "Serverless",
    label: "Serverless Stack",
    color: "#FF8B00",
  },
  {
    value: "ReactNative",
    label: "React Native",
    color: "#FF8B00",
  },
  {
    value: "Swift",
    label: "Swift",
    color: "#FF8B00",
  },
  {
    value: "Kotlin",
    label: "Kotlin",
    color: "#FF8B00",
  },
  {
    value: "Flutter",
    label: "Flutter",
    color: "#FF8B00",
  },
  {
    value: "Ionic",
    label: "Ionic",
    color: "#FF8B00",
  },
  {
    value: "AngularJS",
    label: "AngularJS Stack",
    color: "#FF8B00",
  },
  {
    value: "SpringBoot",
    label: "Spring Boot",
    color: "#FF8B00",
  },
  {
    value: "Flask",
    label: "Flask Stack",
    color: "#FF8B00",
  },
  {
    value: "NestJS",
    label: "NestJS Stack",
    color: "#FF8B00",
  },
  {
    value: "GraphQL",
    label: "GraphQL",
    color: "#FF8B00",
  },
  {
    value: "AWS",
    label: "AWS Stack",
    color: "#FF8B00",
  },
  {
    value: "Azure",
    label: "Azure Stack",
    color: "#FF8B00",
  },
  {
    value: "GoogleCloud",
    label: "Google Cloud Stack",
    color: "#FF8B00",
  },
  {
    value: "Firebase",
    label: "Firebase",
    color: "#FF8B00",
  },
];

export { roles, experience, workMode, salary, locations, techStacks };
