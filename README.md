# Moneyment
## Team members
### Set F
| Name | Student ID |
| ----|----|
| Jacob Skilling | A01317253 |
| Justin Wu | A01313319 |

### Set H
| Name | Student ID |
| ----|----|
| Giovana Birck | A01299565 |
| Kaitlyn Cameron | A01326523 |
| Hayden Leung | A01317567 |
| Jenny McMahon | A01338943 |
| Joey Nip | A01263339 |
| Corey J. Rutt | A01334753 |
| Sara Shiojima-Ali | A01314209 |

## Description
Moneyment is a financial management mobile application designed for post-secondary students, fueled by cutting-edge AI technology to transform financial tasks into stress-free and seamless experiences.

This application was created using Expo and designed around an emulated custom device with iPhone 13 dimensions on Android Studio.

## Features
- Dark & Light Mode
- Firebase login/logout
- OCR receipt scanning
- OpenAI Receipt Data Review
- OpenAI chat feature
- Dynamic transactions list, budgets, and data visualization
- Firestore database

## Getting started
### Installing dependencies
```
yarn install
```
### Running the application on Expo
```
yarn
```

## Libraries used
- Paper UI
- Iconify
- Firebase
- React Native
- React Navigation
- Expo
- Axios
- Material3
- GiftedChat

## Functionality
Users can access the app without creating an account, however, account creation is required to access the online dashboard (the online dashboard is only for show at this time). Transactions can be added manually, or via the scan receipt function. Currently only uploading photos via the phones gallery is possible. 

By clicking Scan Receipt, you can upload a photo. The first stop of the photo is an OCR software that can review the receipts or finanical records, and return all the text found within them, including prices. After the OCR review returns the data it is then sent via api to openAI to review the receipt data. The openAI API is stored in a docker image and called via lambda aws. The docker image contains the necessary API keys.

The data is then returned from the GPT review. The response will contain an object with three key value pairs, the data returned being Product, Place, Price. This is then populated into the add new transaction form. When the save button is hit it will call a close functionality, which calls the firestore data base to create a new entry in the collection.

The manual input opens a form with the same functionality as the ScanReceipt component.

All recent transactions can be reviewed in the transaction tab, this is setup to utilize useSnapshot. When the firestore collection is updated, the transaction list is also updated. useSnapshot is also utilized on the budget page. Individual budgets set by users will track any transaction that is added that contains the same budget name. Clicking on an individual budgetcards opens up an individual budget overview for that budget, showing the user their matching transactions. The data from the DB is then aggragated and shown in each of the budgets, it shows the sum of their transactions and performs calculations to show how much budget is remaining. 

Budget.js calls the database and pulls all transactions and budgets. It maps through the data and creates a budgetcard for each of the budgets found, then shows each transaction matching that budget in the overview for the single budget. This can be seen by clicking on the budget.

The chart pulls this data in as well to display a stacked bar chart showing the budget amount, spent, and remaining totals. 

GiftedChat was used to create a chat function that interfaces with the openai api held within the docker image via lambda aws. The role and question can be directly altered within this file. A useEffect sets the initial message to make it appear instantly ready for discussion regarding finance, budgeting and money.

OpenAI Instructions: Both "question" and "role" parameters must be supplied to the aws link. Optional: 'data' parameter can also be sent to the gptReviewTransaction for more detailed explainations on user behaviours and habits, via information stored on the firestore database. Strings are expected on all three parameters (question, role and data).

The settings page contains a switch that allows users to toggle between light and dark mode, which is setup within the theme files.

The methods in which this is called can be seen in root/api/gptTransactionReview, as well as ScanReceipt.js and Chat.js files.


## Intended Future Features

- Error Handling
- Editing transactions
- Taking pictures of your receipt with the phone camera directly

## Dependencies
- @eva-design/eva
- @pchmn/expo-material3-theme
- @react-native-async-storage/async-storage
- @react-native-masked-view/masked-view
- @react-native-picker/picker
- @react-native-segmented-control/segmented-control
- @react-navigation/bottom-tabs
- @react-navigation/native
- @react-navigation/native-stack
- @react-navigation/stack
- @ui-kitten/components
- axios
- chart.js
- expo
- expo-asset
- expo-font
- expo-image
- expo-image-picker
- expo-status-bar
- expo-system-ui
- firebase
- native
- picker
- react
- react-chartjs-2
- react-native
- react-native-chart-kit
- react-native-event-listeners
- react-native-gesture-handler
- react-native-gifted-chat
- react-native-iconify
- react-native-paper
- react-native-progress
- react-native-reanimated
- react-native-safe-area-context
- react-native-screens
- react-native-select-dropdown
- react-native-svg
- react-native-svg-charts
- react-native-svg-uri
- react-native-vector-icons
- react-native-windows
- recharts

