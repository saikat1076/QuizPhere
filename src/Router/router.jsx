import {
    createBrowserRouter
  } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home";
import MCQQuiz from "../Pages/MCQQuiz";
import IntregerQuiz from "../Pages/IntregerQuiz";
import QuizRules from "../Pages/QuizRules";
import QuizHistory from "../Pages/QuizHIstory";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Layouts></Layouts>,
      children:[

        {
          path: '/',
          element:<Home></Home>
        },
        {
          path: '/quiz-history',
          element:<QuizHistory></QuizHistory>
        },
        {
          path: '/mcq-exam',
          element:<MCQQuiz></MCQQuiz>
        },
        {
          path: '/cq-exam',
          element:<IntregerQuiz></IntregerQuiz>
        },
        {
          path: '/rules',
          element:<QuizRules></QuizRules>
        }
        
      ]
    }
  ]);

export default router;