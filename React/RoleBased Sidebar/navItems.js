import {
  User,
  Key,
  LogIn,
  List,
  Info, 
  UserCheck,
  Coffee,
  FileText,
  HelpCircle,
  Phone,
  Crop,
  DollarSign,

} from "react-feather";

  const testList = [ 
    //your account
    {
      label: "Register",
      icon: FileText,
      description:
        "This is a dashboard page example built using this template.",
      category: "User",
      to: "/register",
      roles: ["User", "Admin"],
    }, 
    {
      
      label: "Login",
      icon: LogIn,
      description:
        "This is a dashboard page example built using this template.",
      category: "User",
      to: "/login",
      roles: ["User", "Admin"],
    },
    {
      label: "Confirm Email",
      icon: UserCheck,
      description:
        "This is a dashboard page example built using this template.",
      category: "User",
      to: "/confirm",
      roles: ["User", "Admin"],
    },
    {
      label: "Profile",
      icon: User,
      description:
        "This is a dashboard page example built using this template.",
      category: "User",
      to: "/userprofilepage",
      roles: ["User","Admin"],
    },
    
   //Help
    {
      label: "Contact Us",
      icon: Phone,
      description:
        "This is a dashboard page example built using this template.",
      category: "Help",
      to: "/contactus",
      roles: ["User", "Admin"],
    },     
    {
      label: "Help",
      icon: HelpCircle,
      description:
        "This is a dashboard page example built using this template.",
      category: "Help",

      to: "/blogs",
      roles: ["User", "Admin"],
    },
    
  //Products
    {
      label: "Start Designing",
      icon: Crop,
      description:
        "This is a dashboard page example built using this template.",
      category: "Products",

      to: "/#",
      roles: ["User","Admin"],
    },
    {
      label: "Promotional Products",
      icon: DollarSign,
      description:
        "This is a dashboard page example built using this template.",
      category: "Products",

      to: "/#",
      roles: ["User","Admin"],
    },   
    {
      label: "View All Categories",
      icon: List,
      description:
        "This is a dashboard page example built using this template.",
      category: "Products",

      to: "/#",
      roles: ["User","Admin"],
    },  
  
 
    //Design Templates
   
    
    //About Us
    {
      label: "About",
      icon: Info,
      description:
        "This is a dashboard page example built using this template.",
      category: "About Us",

      to: "/blogs",
      roles: ["User","Admin"],
    },
    
 
    
    //admin
    {
      label: "Admin",
      icon: Key,
      description:
        "This is a dashboard page example built using this template.",
      category: "Admin",
      to: "/confirm",
      roles: ["Admin"],
    },
    {
      label: "Blogs",
      icon: Coffee,
      description:
        "This is a dashboard page example built using this template.",
      category: "Admin",
      to: "/blogs",
      roles: ["Admin"],
    },
  ];

  let idCounter = 1;
  
  testList.forEach(item => {
    
    item.id = idCounter++
    
  })



export default testList;
