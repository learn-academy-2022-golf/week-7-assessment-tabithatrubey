# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: You can fix this by associating the person with the Cohort. Since the Cohort has the primary key, as indicated by has_many students, we have to associate the student that belongs_to Cohort. The foreign key should be on the Student side. The foreign key can be added my creating a variable to store cohort and assign the cohort a student. The student should have a foreign key that matches the Cohort's cohort_id, which is their primary key.

Researched answer:Since the Cohort model has the has_many description, students should follow after has_many, and this means the Cohort model will hold the primary key. The Student model which belongs_to the Cohort model will hold the foreign keys, as the foreign key always takes the side that has "belongs_to". To create the foreign key, we set cohort to a variable for each student and input their name, which will assign the foreingn key in the database for Student. For example, golf = cohort.first golf.students.create student: "Tabi Trubey". 

2. Which RESTful routes must always be passed params? Why?

Your answer: I don't think you HAVE to pass params to RESTful routes, as long as you're okay with hard coding everything and having static and generic code. However, I think the RESTful routes that must always be passed params are show, new, create, edit, update, and destroy because they are all operating on ONE specific item, which needs to be dynamic as it can change depending on what id is to be deleted or updated or created. I think index would be the only one that doesn't need params because it shows ALL of the data at all times. 

Researched answer: The create and update RESTful routes must always be passed params. These params are called strong params and protect the security, integrity, and validitiy of a database. Create and update are passed strong params so an unauthorized user or "hacker" will not be able to create malicious data in the database or delete vital instances in the database. The strong params are indicated by the private method, which is created as the last method in the controller, because anything below it is included in the method and only create and update are intended to be the sole arguments. These params place requirements on what is permitted and where and cannot be changed. 

3. Name three rails generator commands. What is created by each?

Your answer: Three rails generator commands are generate model, generate rspec, and generate migration. Generate model creates the table for the rails application. This command also creates the schema, which holds the architecture for the model: the table's columns and their respective data types. Each instance entered into the model is also given a primary key automatically by rails. Generate rspec downloads the testing framework a programmer would use to ensure proper validations are occuring throughout their code. In the beginning, when we create a rails app we can use -T to drop the Minitest testing framework that automatically generates, so we can go back later and tell rails which specific testing framework we would like to operate on. Generate rspec allows for proper Test Driven Development for successful code. Lastly, Generate migration allows a programmer to edit an instance and save it permanently. If an error is occuring, and I don't see what I'm expecting, I will always think, did I migrate this? Many times I didn't migrate an isntance so the change wasn't recorded or saved.

Researched answer: Generate model creates a new model which generates the name of the model and its associated column names and their data types. The model name in the generate model command is always uppercase and singular. For example, $rails generate model House address:integer rooms:integer wall_color:string. This command does not create the schema. The schema will be created after the model is generated and the generate migrate command has been ran. The migration command allows programmers to edit the database and save the changes. A file will be generated for each migration and it will be timestamped for chronological timelines and runs SQL commands. The migration command is ran to create the model class. The migration command allows programmers to create, edit, and delete columns from thier databases. Lastly, the generate rspec commands are rendered prior to creating a model, or else, the model will not have the appropriate framework if installed after model completion. The rspec command is  $rails generate rspec:install which installs all rspec dependencies. These dependencies are vital for proper testing and to ensure successful validations are occuring. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

                                                      controller             action
action: "GET" location: /students                     index                 This is showing/retrieving all of the students.

action: "POST" location: /students                    create                This is sending a new student to the database.

action: "GET" location: /students/new                 new                   This sends an HTML form to the user to have their info sent to the database.

action: "GET" location: /students/2                   show                  This is sending back one instance (2) of the students.

action: "GET" location: /students/2/edit              edit                  This is updating the instance from the HTML form.

action: "PATCH" location: /students/2                 update                This is overwriting student with an ID of 2.

action: "DELETE" location: /students/2                destroy               This is deleting the instance from the database.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
    1. I want a table that indicates the date
    2. The table should have three columns: one for personal to-dos, proffessional to-dos, and significant other to-dos since I am better at task keeping than my boyfriend and must remind him of to-dos constantly. 
    3. Under each column should be three blocks for priority organization: high-low priority
    4. There should be a feature that lets me cross off the task
    5. Once the task is crossed off, it will disappear in five seconds after a quick song like "You did it, you did it, yeah yeah you did it" from Dora, and move the next item up
    6. The list should be able to share from my computer and my phone and to other users
    7. The list should be able to be customized by each user's color and font styling preference 
    8. A banner should be atop the list whenever it's a holiday, indicating that specific holiday
    9. Once all items are crossed off a "CONGRATS, TIME TO RELAX"  notification should appear
    10. If all items aren't crossed off from the previous day they should transfer over immediately to the next day without the user having to rewrite them
