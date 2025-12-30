const employees = [
  {
    id: 1,
    firstName: "Arya",
    email: "arya@company.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Authentication APIs",
        taskDescription: "Create secure REST APIs for user authentication",
        taskDate: "2024-10-15",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Project Sync Meeting",
        taskDescription: "Weekly project discussion with manager",
        taskDate: "2024-10-10",
        category: "Meeting"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Resolve Login Timeout Issue",
        taskDescription: "Fix session timeout bug in login flow",
        taskDate: "2024-10-16",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    firstName: "Adarsh",
    email: "adarsh@company.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design Dashboard Wireframe",
        taskDescription: "Create UI wireframe for dashboard screen",
        taskDate: "2024-10-12",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Accessibility Compliance Check",
        taskDescription: "Review UI against WCAG accessibility standards",
        taskDate: "2024-10-13",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update API Documentation",
        taskDescription: "Revise and update API reference docs",
        taskDate: "2024-10-09",
        category: "Documentation"
      }
    ]
  },
  {
    id: 3,
    firstName: "Rohit",
    email: "rohit@company.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 0,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Review Payment Feature Code",
        taskDescription: "Perform code review for payment module PR",
        taskDate: "2024-10-14",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Migrate Database Version",
        taskDescription: "Upgrade database from MySQL 5.7 to 8.0",
        taskDate: "2024-10-15",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write Unit Test Cases",
        taskDescription: "Add unit tests for order service",
        taskDate: "2024-10-08",
        category: "QA"
      }
    ]
  },
  {
    id: 4,
    firstName: "Aayushi",
    email: "aayushi@company.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Monitor Server Health",
        taskDescription: "Check server logs and monitor errors",
        taskDate: "2024-10-11",
        category: "DevOps"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Configure CI Pipeline",
        taskDescription: "Set up continuous integration using Jenkins",
        taskDate: "2024-10-13",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Backup Execution",
        taskDescription: "Perform full backup of production databases",
        taskDate: "2024-10-09",
        category: "Infrastructure"
      }
    ]
  },
  {
    id: 5,
    firstName: "Dipanshu",
    email: "dipanshu@company.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 0,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Client Demo",
        taskDescription: "Create demo for upcoming client presentation",
        taskDate: "2024-10-14",
        category: "Presentation"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Integrate Frontend with APIs",
        taskDescription: "Connect backend APIs with frontend UI",
        taskDate: "2024-10-12",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy to Staging Environment",
        taskDescription: "Deploy latest build to staging server",
        taskDate: "2024-10-10",
        category: "Deployment"
      }
    ]
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  return { employees };
};