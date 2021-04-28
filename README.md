Thrills App
This application was designed for adventure or thrill seeking individuals who visit the island of Jamamica. The app was made with React.js & Redux which was used as the frontend and it connects to a Rails API on the Backend through Redux-Thunk. Using CSS and bootstrap for styling.


Installing To run this app locally, fork and clone the frontend GitHub repo and the backend Github repo to your local machine. https://github.com/rvt-tex/thrills-api https://github.com/rvt-tex/thrills-client

Change directories into the backend local directory. Run bundle install to install dependencies, and rails db:migrate and rails db:seed to create and seed the database.

$cd tex-luxury-pins-backend $bundle install $rails db:migrate $rails db:seed Run $rails s to start a web server and access the app in a web browser.

Change directories into the client(frontend) local directory. Run the following comands;

npm install
npm start
If you need to install npm first install homebrew and then node (for MacOs).

Libraries and Packeges
Some of the libraries and packages used in this project are:

React 16.13.1
React Router Dom 5.2.0
Redux 4.0.5
Redux-Thunk 2.3.0
Redux DevTools Extension 2.13.8
React Dom 16.13.1


Bug reports and pull requests are welcome on GitHub at https://github.com/rvt-tex/thrills-client or at https://github.com/rvt-tex/thrills-api. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

License This project is licensed under the MIT License - see the LICENSE.md file for details

