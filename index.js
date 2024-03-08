import inquirer from "inquirer";
let todos = [];
async function todoList(todos) {
    do {
        console.log("Welcome to the todo list app!");
        let answers = await inquirer.prompt([{
                type: "list",
                name: "Operations",
                choices: ["Add", "View", "Update", "Delete"],
                message: "Which operation you want to perform?"
            }]);
        if (answers.Operations === "Add") {
            let add = await inquirer.prompt({
                type: "input",
                name: "addTodo",
                message: "Enter your todo:"
            });
            console.log("Your todo list : ");
            todos.push(add.addTodo);
            todos.forEach(todo => {
                console.log(`${todo}`);
            });
        }
        if (answers.Operations === "View") {
            todos.forEach(todo => {
                console.log(`${todo}`);
            });
        }
        if (answers.Operations == "Update") {
            let update = await inquirer.prompt([
                {
                    type: "list",
                    name: "update1",
                    message: "Select item to update",
                    choices: todos.map(todo => todo)
                },
                {
                    type: "input",
                    name: "update2",
                    message: "Enter a new todo:"
                }
            ]);
            // Make a variable of name newTodo and call a function of findindex to find the indexnumber of array element which is equal to "update.update1"
            let newTodo = todos.findIndex(todo => todo == update.update1);
            if (newTodo !== -1) {
                // if new todo is not equal to -1 . It means user select a item to update  so value of "update.update2" in todos array of 
                // index[newtodo] which we find by using "find index method" in a variable of newTodo.
                todos[newTodo] = update.update2;
                console.log("Your updated todo list");
                todos.forEach(todo => {
                    console.log(`${todo}`);
                });
            }
            else {
                console.log("No update found");
            }
        }
        if (answers.Operations === "Delete") {
            let remove = await inquirer.prompt({
                type: "list",
                name: "delete",
                message: "which item you want to delete : ",
                choices: todos.map(todo => todo)
            });
            let deletetodo = todos.filter(val => val !== remove.delete);
            todos = [...deletetodo];
            todos.forEach(todo => {
                console.log(todo);
            });
        }
    } while (true);
}
todoList(todos);
