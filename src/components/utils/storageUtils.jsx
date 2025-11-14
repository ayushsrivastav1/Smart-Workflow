const employees = [
    {
        "id": 1,
        "firstName": "Arya",
        "email": "arya@company.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Create API Endpoints",
                "taskDescription": "Build REST APIs for authentication module",
                "taskDate": "2024-10-15",
                "category": "Backend"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Team Meeting",
                "taskDescription": "Weekly sync-up with project manager",
                "taskDate": "2024-10-10",
                "category": "Meeting"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Bug Fix",
                "taskDescription": "Fix login session timeout issue",
                "taskDate": "2024-10-16",
                "category": "Development"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Adarsh",
        "email": "adarsh@company.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "UI Prototype",
                "taskDescription": "Design prototype for dashboard screen",
                "taskDate": "2024-10-12",
                "category": "UI/UX"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Accessibility Review",
                "taskDescription": "Check compliance with WCAG standards",
                "taskDate": "2024-10-13",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Documentation Update",
                "taskDescription": "Update API reference docs",
                "taskDate": "2024-10-09",
                "category": "Documentation"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Rohit",
        "email": "rohit@company.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Code Review",
                "taskDescription": "Review pull request for payment feature",
                "taskDate": "2024-10-14",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Database Migration",
                "taskDescription": "Migrate DB from MySQL 5.7 to 8.0",
                "taskDate": "2024-10-15",
                "category": "Database"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Unit Testing",
                "taskDescription": "Write unit tests for order service",
                "taskDate": "2024-10-08",
                "category": "QA"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Aayushi",
        "email": "aayushi@company.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Server Monitoring",
                "taskDescription": "Monitor server logs for errors",
                "taskDate": "2024-10-11",
                "category": "DevOps"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Setup CI Pipeline",
                "taskDescription": "Integrate CI with Jenkins",
                "taskDate": "2024-10-13",
                "category": "DevOps"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "System Backup",
                "taskDescription": "Perform full backup of databases",
                "taskDate": "2024-10-09",
                "category": "Infrastructure"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Dipanshu",
        "email": "dipanshu@company.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Client Demo",
                "taskDescription": "Prepare demo for client presentation",
                "taskDate": "2024-10-14",
                "category": "Presentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Frontend Integration",
                "taskDescription": "Integrate API with frontend",
                "taskDate": "2024-10-12",
                "category": "Frontend"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Deployment",
                "taskDescription": "Deploy build on staging server",
                "taskDate": "2024-10-10",
                "category": "Deployment"
            }
        ]
    }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    return { employees }
}