# WDIO-Trello homework

HOME TASK
1. Walk through the provided materials (official documentation, video) to understand how WDIO works and the main benefits of the tool.
2. Create an initial setup of WDIO on the local machine
3. Create WDIO config if it does not exist and familiarize
3. Create first specs using the existing BDD scenario created in Module 1
4. Execute these tests using CLI in different browsers (Chrome, Firefox, Safari) in headless mode
5. Execute tests in parallel using 2 instances
6. Add the option to run tests 2 times before marking it as failed
7. Push the code to remote repository and create Merge Request

Run this command for all tests execution: "npm test"

Run this command for test that execute in parallel: "npm run parallel-tests"

Thare two suites that need to be run sequentially so as not to break them in the process. To execute only those run command: "npm sequential-tests"
