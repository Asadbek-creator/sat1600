// Question Bank data — kept in a file separate from assets/qbank/questions.js (the mock-test
// question set) on purpose: nothing in here should ever also appear in a paid/unlockable mock
// test, so practicing in the Question Bank can never spoil a mock test's questions in advance.
//
// Each domain key holds an array of question objects using the same shape as the mock
// question data: { num, stem, images, type, choices, answer, domain, difficulty }.
const BANK_QUESTIONS = {
  "Algebra": [
  {
    "num": 1,
    "stem": "In the xy-plane, line k has a slope of 5 and a y-intercept of (0, -35). What is the x-coordinate of the x-intercept of line k?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "7",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 2,
    "stem": "If the graph of 27x + 33y = 297 is shifted down 5 units in the xy-plane, what is the y-intercept of the resulting graph?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(0, 4)",
      "B": "(0, 6)",
      "C": "(0, 14)",
      "D": "(0, 28)"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 3,
    "stem": "The function f is defined by f(x) = 4x. For what value of x does f(x) = 8?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "2",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 4,
    "stem": "On a car trip, Rhett and Jessica each drove for part of the trip, and the total distance they drove was under 220 miles. Rhett drove at an average speed of 35 miles per hour (mph), and Jessica drove at an average speed of 40 mph. Which of the following inequalities represents this situation, where r is the number of hours Rhett drove and j is the number of hours Jessica drove?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "35r + 40j > 220",
      "B": "35r + 40j < 220",
      "C": "40r + 35j > 220",
      "D": "40r + 35j < 220"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 5,
    "stem": "A local transit company sells a monthly pass for $95 that allows an unlimited number of trips of any length. Tickets for individual trips cost $1.50, $2.50, or $3.50, depending on the length of the trip. What is the minimum number of trips per month for which a monthly pass could cost less than purchasing individual tickets for trips?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "28",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 6,
    "stem": "The equation y = 0.1x models the relationship between the number of different pieces of music a certain pianist practices, y, during an x-minute practice session. How many pieces did the pianist practice if the session lasted 30 minutes?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "1",
      "B": "3",
      "C": "10",
      "D": "30"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 7,
    "stem": "A bakery sells trays of cookies. Each tray contains at least 50 cookies but no more than 60. Which of the following could be the total number of cookies on 4 trays of cookies?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "165",
      "B": "205",
      "C": "245",
      "D": "285"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 8,
    "stem": "How many solutions does the equation 10(15x - 9) = -15(6 - 10x) have?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Exactly one",
      "B": "Exactly two",
      "C": "Infinitely many",
      "D": "Zero"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 9,
    "stem": "y = -2x\n3x + y = 40\nThe solution to the given system of equations is (x, y). What is the value of x?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "40",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 10,
    "stem": "Hydrogen is placed inside a container and kept at a constant pressure. The graph shows the estimated volume y, in liters, of the hydrogen when its temperature is x kelvins. What is the estimated volume, in liters, of the hydrogen when its temperature is 500 kelvins?\n\n[Figure: Line graph titled with axes: x-axis labeled 'Temperature (kelvins)' with gridlines/labels at 100, 200, 300, 400, 500, 600, 700, 800; y-axis labeled 'Volume (liters)' with gridlines/labels 0 through 12. A straight line starts near (50, 1.3) at the lower left and rises to about (800, 11.2) at the upper right, with an arrow continuing past the last labeled gridline. The line passes through the point (500, 7).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "0",
      "B": "7/500",
      "C": "7",
      "D": "500/7"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 11,
    "stem": "x + y = 18\n5y = x\nWhat is the solution (x, y) to the given system of equations?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(15, 3)",
      "B": "(16, 2)",
      "C": "(17, 1)",
      "D": "(18, 0)"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 12,
    "stem": "The line graphed in the xy-plane below models the total cost, in dollars, for a cab ride, y, in a certain city during nonpeak hours based on the number of miles traveled, x. According to the graph, what is the cost for each additional mile traveled, in dollars, of a cab ride?\n\n[Figure: Line graph titled 'Total Cost for a Cab Ride'. X-axis labeled 'Distance traveled (miles)' with gridlines at 0, 5, 10. Y-axis labeled 'Cost (dollars)' with gridlines at 0, 5, 10, 15. The line has a y-intercept at (0, 3) and passes through the points (1, 5) and (2, 7), corresponding to the equation y = 2x + 3 (slope 2).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "$2.00",
      "B": "$2.60",
      "C": "$3.00",
      "D": "$5.00"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 13,
    "stem": "In the xy-plane, line k intersects the y-axis at the point (0, -6) and passes through the point (2, 2). If the point (20, w) lies on line k, what is the value of w?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "74",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 14,
    "stem": "y ≤ x + 7\ny ≥ -2x - 1\nWhich point (x, y) is a solution to the given system of inequalities in the xy-plane?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(-14, 0)",
      "B": "(0, -14)",
      "C": "(0, 14)",
      "D": "(14, 0)"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 15,
    "stem": "A team of workers has been moving cargo off of a ship. The equation below models the approximate number of tons of cargo, y, that remains to be moved x hours after the team started working. y = 120 - 25x. The graph of this equation in the xy-plane is a line. What is the best interpretation of the x-intercept in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The team will have moved all the cargo in about 4.8 hours.",
      "B": "The team has been moving about 4.8 tons of cargo per hour.",
      "C": "The team has been moving about 25 tons of cargo per hour.",
      "D": "The team started with 120 tons of cargo to move."
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 16,
    "stem": "y = 2x + 10\ny = 2x - 1\nAt how many points do the graphs of the given equations intersect in the xy-plane?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Zero",
      "B": "Exactly one",
      "C": "Exactly two",
      "D": "Infinitely many"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 17,
    "stem": "Which of the following is an equation of the graph shown in the xy-plane above?\n\n[Figure: Small line graph in the xy-plane with x-axis and y-axis shown (arrows on both ends). The y-axis is marked at -1. The line slopes downward from upper left to lower right, passing through the points (0, -1) and (4, -2), giving a slope of -1/4 and y-intercept (0, -1).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = -1/4 x - 1",
      "B": "y = -x - 4",
      "C": "y = -x - 1/4",
      "D": "y = -4x - 1"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 18,
    "stem": "4x - 6y = 10y + 2\nty = 1/2 + 2x\nIn the given system of equations, t is a constant. If the system has no solution, what is the value of t?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "8",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 19,
    "stem": "3/5 x + 3/4 y = 7\nWhich table gives three values of x and their corresponding values of y for the given equation?\n\n[Figure: Four answer-choice tables, each with columns x and y and three rows (x = 1, 2, 4). Choice A: y = 113/20, 101/20, 77/20. Choice B: y = 47/5, 44/5, 38/5. Choice C: y = 148/15, 136/15, 112/15. Choice D: y = 128/15, 116/15, 92/15.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "x: 1, 2, 4; y: 113/20, 101/20, 77/20",
      "B": "x: 1, 2, 4; y: 47/5, 44/5, 38/5",
      "C": "x: 1, 2, 4; y: 148/15, 136/15, 112/15",
      "D": "x: 1, 2, 4; y: 128/15, 116/15, 92/15"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 20,
    "stem": "A certain township consists of a 5-hectare industrial park and a 24-hectare neighborhood. The total number of trees in the township is 4,529. The equation 5x + 24y = 4,529 represents this situation. Which of the following is the best interpretation of x in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The average number of trees per hectare in the industrial park",
      "B": "The average number of trees per hectare in the neighborhood",
      "C": "The total number of trees in the industrial park",
      "D": "The total number of trees in the neighborhood"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 21,
    "stem": "48x - 64y = 48y + 24\nry = 1/8 - 12x\n\nIn the given system of equations, r is a constant. If the system has no solution, what is the value of r?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "-28",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 22,
    "stem": "A chemist studying the impact of salt on a process mixes x kilograms of a low-salt mixture, which is 2% salt by weight, with y kilograms of a high-salt mixture, which is 96% salt by weight, to create 24 kilograms of a mixture that is 4% salt by weight. Which equation represents this situation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "0.96x + 0.02y = (0.04)(24)",
      "B": "0.02x + 0.96y = (0.04)(24)",
      "C": "0.96x + 0.02y = 24",
      "D": "0.02x + 0.96y = 24"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 23,
    "stem": "The total cost, in dollars, to rent a surfboard consists of a $25 service fee and a $10 per hour rental fee. A person rents a surfboard for t hours and intends to spend a maximum of $75 to rent the surfboard. Which inequality represents this situation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "10t ≤ 75",
      "B": "10 + 25t ≤ 75",
      "C": "25t ≤ 75",
      "D": "25 + 10t ≤ 75"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 24,
    "stem": "A model predicts that a certain animal weighed 241 pounds when it was born and that the animal gained 3 pounds per day in its first year of life. This model is defined by an equation in the form f(x) = a + bx, where f(x) is the predicted weight, in pounds, of the animal x days after it was born, and a and b are constants. What is the value of a?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "241",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 25,
    "stem": "3a + 4b = 25\nA shipping company charged a customer $25 to ship some small boxes and some large boxes. The equation above represents the relationship between a, the number of small boxes, and b, the number of large boxes, the customer had shipped. If the customer had 3 small boxes shipped, how many large boxes were shipped?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "3",
      "B": "4",
      "C": "5",
      "D": "6"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 26,
    "stem": "What is the equation of the line that passes through the point (0, 5) and is parallel to the graph of y = 7x + 4 in the xy-plane?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = 5x",
      "B": "y = 7x + 5",
      "C": "y = 7x",
      "D": "y = 5x + 7"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 27,
    "stem": "A group of 202 people went on an overnight camping trip, taking 60 tents with them. Some of the tents held 2 people each, and the rest held 4 people each. Assuming all the tents were filled to capacity and every person got to sleep in a tent, exactly how many of the tents were 2-person tents?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "30",
      "B": "20",
      "C": "19",
      "D": "18"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 28,
    "stem": "A company that creates and sells tape dispensers calculates its monthly profit, in dollars, by subtracting its fixed monthly costs, in dollars, from its monthly sales revenue, in dollars. The equation 15,000 = 2.00x - 4,500 represents this situation for a month where x tape dispensers are created and sold. Which statement is the best interpretation of 2.00x in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The monthly sales revenue, in dollars, from selling x tape dispensers",
      "B": "The monthly sales revenue, in dollars, from each tape dispenser sold",
      "C": "The monthly cost, in dollars, of creating each tape dispenser",
      "D": "The monthly cost, in dollars, of creating x tape dispensers"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 29,
    "stem": "A petting zoo sells two types of tickets. The standard ticket, for admission only, costs $5. The premium ticket, which includes admission and food to give to the animals, costs $12. One Saturday, the petting zoo sold a total of 250 tickets and collected a total of $2,300 from ticket sales. Which of the following systems of equations can be used to find the number of standard tickets, s, and premium tickets, p, sold on that Saturday?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "s + p = 250, 5s + 12p = 2,300",
      "B": "s + p = 250, 12s + 5p = 2,300",
      "C": "5s + 12p = 250, s + p = 2,300",
      "D": "12s + 5p = 250, s + p = 2,300"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 30,
    "stem": "In North America, the standard width of a parking space is at least 7.5 feet and no more than 9.0 feet. A restaurant owner recently resurfaced the restaurant's parking lot and wants to determine the number of parking spaces, n, in the parking lot that could be placed perpendicular to a curb that is 135 feet long, based on the standard width of a parking space. Which of the following describes all the possible values of n?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "18 ≤ n ≤ 135",
      "B": "7.5 ≤ n ≤ 9",
      "C": "15 ≤ n ≤ 135",
      "D": "15 ≤ n ≤ 18"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 31,
    "stem": "Two customers purchased the same kind of bread and eggs at a store. The first customer paid 12.45 dollars for 1 loaf of bread and 2 dozen eggs. The second customer paid 19.42 dollars for 4 loaves of bread and 1 dozen eggs. What is the cost, in dollars, of 1 dozen eggs?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "3.77",
      "B": "3.88",
      "C": "4.15",
      "D": "4.34"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 32,
    "stem": "x + y = 75\nThe equation above relates the number of minutes, x, Maria spends running each day and the number of minutes, y, she spends biking each day. In the equation, what does the number 75 represent?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The number of minutes spent running each day",
      "B": "The number of minutes spent biking each day",
      "C": "The total number of minutes spent running and biking each day",
      "D": "The number of minutes spent biking for each minute spent running"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 33,
    "stem": "3x + 21 = 3x + k\nIn the given equation, k is a constant. The equation has infinitely many solutions. What is the value of k?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "21",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 34,
    "stem": "g(x) = 11x + 4\nFor the given linear function g, which table shows three values of x and their corresponding values of g(x)?\n\n[Figure: Four 2-column tables (x, g(x)), each with rows x=-1,0,1. Choice A values of g(x): 7, 11, 15 (this is g(x)=4x+11). Choice B: -4, 0, 4 (g(x)=4x). Choice C: -7, 4, 15 (matches g(x)=11x+4, the correct one). Choice D: -11, 0, 11 (g(x)=11x).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Table: x=-1,g(x)=7; x=0,g(x)=11; x=1,g(x)=15",
      "B": "Table: x=-1,g(x)=-4; x=0,g(x)=0; x=1,g(x)=4",
      "C": "Table: x=-1,g(x)=-7; x=0,g(x)=4; x=1,g(x)=15",
      "D": "Table: x=-1,g(x)=-11; x=0,g(x)=0; x=1,g(x)=11"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 35,
    "stem": "3(2x - 6) - 11 = 4(x - 3) + 6\nIf x is the solution to the equation above, what is the value of x - 3?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "23/2",
      "B": "17/2",
      "C": "15/2",
      "D": "-15/2"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 36,
    "stem": "y = 4\nx = y + 6\nThe solution to the given system of equations is (x, y). What is the value of x?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "10",
      "B": "6",
      "C": "4",
      "D": "2"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 37,
    "stem": "A factory makes 9-inch, 7-inch, and 4-inch concrete screws. During a certain day, the number of 9-inch concrete screws that the factory makes is 5 times the number n of 7-inch concrete screws, and the number of 4-inch concrete screws is 22. During this day, the factory makes 100 concrete screws total. Which equation represents this situation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "9(5n) + 7n + 4(22) = 100",
      "B": "9n + 7n + 4n = 100",
      "C": "5n + 22 = 100",
      "D": "6n + 22 = 100"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 38,
    "stem": "The graph of a system of linear equations is shown. What is the solution (x, y) to the system?\n\n[Figure: xy-plane grid, both axes labeled 0 to 10 with gridlines at each integer. Two lines are graphed: one descending line passing through (0,8) and (6,0) (slope -4/3); one ascending line passing through (0,1) and continuing through (9,10) (slope 1, equation y=x+1). The two lines intersect at the point (3,4).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(2, 3)",
      "B": "(3, 4)",
      "C": "(4, 5)",
      "D": "(5, 6)"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 39,
    "stem": "Alan drives an average of 100 miles each week. His car can travel an average of 25 miles per gallon of gasoline. Alan would like to reduce his weekly expenditure on gasoline by $5. Assuming gasoline costs $4 per gallon, which equation can Alan use to determine how many fewer average miles, m, he should drive each week?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(25/4)m = 95",
      "B": "(25/4)m = 5",
      "C": "(4/25)m = 95",
      "D": "(4/25)m = 5"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 40,
    "stem": "The graph of the equation ax + ky = 6 is a line in the xy-plane, where a and k are constants. If the line contains the points (-2, -6) and (0, -3), what is the value of k?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-2",
      "B": "-1",
      "C": "2",
      "D": "3"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 41,
    "stem": "Line ℓ is defined by 3y + 12x = 5. Line n is perpendicular to line ℓ in the xy-plane. What is the slope of line n?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "0.25|1/4",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 42,
    "stem": "3/2y - 1/4x = 2/3 - 3/2y\n1/2x + 3/2 = py + 9/2\nIn the given system of equations, p is a constant. If the system has no solution, what is the value of p?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "6",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 43,
    "stem": "A window repair specialist charges $220 for the first two hours of repair plus an hourly fee for each additional hour. The total cost for 5 hours of repair is $400. Which function f gives the total cost, in dollars, for x hours of repair, where x >= 2?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(x) = 60x + 100",
      "B": "f(x) = 60x + 220",
      "C": "f(x) = 80x",
      "D": "f(x) = 80x + 220"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 44,
    "stem": "Hector used a tool called an auger to remove corn from a storage bin at a constant rate. The bin contained 24,000 bushels of corn when Hector began to use the auger. After 5 hours of using the auger, 19,350 bushels of corn remained in the bin. If the auger continues to remove corn at this rate, what is the total number of hours Hector will have been using the auger when 12,840 bushels of corn remain in the bin?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "3",
      "B": "7",
      "C": "8",
      "D": "12"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 45,
    "stem": "The function h is defined by h(x) = 4x + 28. The graph of y = h(x) in the xy-plane has an x-intercept at (a, 0) and a y-intercept at (0, b), where a and b are constants. What is the value of a + b?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "21",
      "B": "28",
      "C": "32",
      "D": "35"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 46,
    "stem": "If 4x - 28 = -24, what is the value of x - 7?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-24",
      "B": "-22",
      "C": "-6",
      "D": "-1"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 47,
    "stem": "For line h, the table shows three values of x and their corresponding values of y. Line k is the result of translating line h down 5 units in the xy-plane. What is the x-intercept of line k?\n\n[Figure: Table with two columns x and y, three rows: x=18, y=130; x=23, y=160; x=26, y=178.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(-26/3, 0)",
      "B": "(-9/2, 0)",
      "C": "(-11/3, 0)",
      "D": "(-17/6, 0)"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 48,
    "stem": "(12x+28)/4 - s/13 = r(x-8). In the given equation, s and r are constants, and s > 0. If the equation has infinitely many solutions, what is the value of s?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "403",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 49,
    "stem": "What system of linear equations is represented by the lines shown?\n\n[Figure: xy-plane graph with x-axis from -2 to 10 and y-axis from -2 to 10 (gridlines at each integer). Two straight lines shown, both crossing near (8,0)-(9,0) region. Line 1 passes through the points (8,0) and (3,4). Line 2 passes through the points (8,0) and (3,2). Line 1 has y-intercept 32/5 (equation -8x-10y=-64); Line 2 has y-intercept 16/5 (equation 4x+10y=32).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "8x + 4y = 32; -10x - 4y = -64",
      "B": "8x - 4y = 32; -10x + 4y = -64",
      "C": "4x - 10y = 32; -8x + 10y = -64",
      "D": "4x + 10y = 32; -8x - 10y = -64"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 50,
    "stem": "The function f is defined by f(x) = 25x + 30. What is the value of f(x) when x = 2?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "50",
      "B": "57",
      "C": "80",
      "D": "110"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 51,
    "stem": "Line k is defined by y = -17/3 x + 5. Line j is perpendicular to line k in the xy-plane. What is the slope of line j?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": ".1764|.1765|3/17",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 52,
    "stem": "2(8x) + 4(7y) = 12\n-2(8x) + 4(7y) = 12\nThe solution to the given system of equations is (x, y). What is the value of 8x + 7y?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "3",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 53,
    "stem": "A cargo helicopter delivers only 100-pound packages and 120-pound packages. For each delivery trip, the helicopter must carry at least 10 packages, and the total weight of the packages can be at most 1,100 pounds. What is the maximum number of 120-pound packages that the helicopter can carry per trip?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "2",
      "B": "4",
      "C": "5",
      "D": "6"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 54,
    "stem": "If 2x + 3 = 9, what is the value of 6x - 1?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "17",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 55,
    "stem": "The function f is defined by f(x) = 8x. For what value of x does f(x) = 72?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "8",
      "B": "9",
      "C": "64",
      "D": "80"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 56,
    "stem": "f(x) = 4x + b. For the linear function f, b is a constant and f(7) = 28. What is the value of b?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "0",
      "B": "1",
      "C": "4",
      "D": "7"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 57,
    "stem": "The table gives the coordinates of two points on a line in the xy-plane. The y-intercept of the line is (k-5, b), where k and b are constants. What is the value of b?\n\n[Figure: Table with two columns, x and y, and two data rows: (x=k, y=13) and (x=k+7, y=-15).]",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "33",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 58,
    "stem": "Gabriella deposits $35 in a savings account at the end of each week. At the beginning of the 1st week of a year there was $600 in that savings account. How much money, in dollars, will be in the account at the end of the 4th week of that year?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "460",
      "B": "635",
      "C": "639",
      "D": "740"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 59,
    "stem": "3x = 36y - 45. One of the two equations in a system of linear equations is given. The system has no solution. Which equation could be the second equation in this system?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "x = 4y",
      "B": "(1/3)x = 4y",
      "C": "x = 12y - 15",
      "D": "(1/3)x = 12y - 15"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 60,
    "stem": "-x + y = -3.5\nx + 3y = 9.5\nIf (x, y) satisfies the system of equations above, what is the value of y?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "3/2",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 61,
    "stem": "(1/2)y = 4\nx - (1/2)y = 2\nThe system of equations above has solution (x, y). What is the value of x?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "3",
      "B": "7/2",
      "C": "4",
      "D": "6"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 62,
    "stem": "x + y = 125\nx + y + y = 155\nThe solution to the given system of equations is (x, y). What is the value of y?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "30",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 63,
    "stem": "A veterinarian recommends that each day a certain rabbit should eat 25 calories per pound of the rabbit's weight, plus an additional 11 calories. Which equation represents this situation, where c is the total number of calories the veterinarian recommends the rabbit should eat each day if the rabbit's weight is x pounds?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "c = 25x",
      "B": "c = 36x",
      "C": "c = 11x + 25",
      "D": "c = 25x + 11"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 64,
    "stem": "The total cost f(x), in dollars, to lease a car for 36 months from a particular car dealership is given by f(x) = 36x + 1,000, where x is the monthly payment, in dollars. What is the total cost to lease a car when the monthly payment is $400?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "$13,400",
      "B": "$13,000",
      "C": "$15,400",
      "D": "$37,400"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 65,
    "stem": "The shaded region shown in the graph represents all the solutions to which inequality?\n\n[Figure: xy-plane graph, x-axis from -15 to 15 (gridlines every 5), y-axis from 0 to 60 (gridlines every 5). A horizontal solid boundary line at y=36 passes through points (-15,36) and (0,36); the region above the line (from y=36 up to y=60, shaded gray) represents the solution set.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "x ≤ 36",
      "B": "x ≥ 36",
      "C": "y ≤ 36",
      "D": "y ≥ 36"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 66,
    "stem": "w + 7 = 357\nWhat value of w is the solution to the given equation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "51",
      "B": "350",
      "C": "364",
      "D": "3,577"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 67,
    "stem": "The function f is defined by f(x) = 4x + k(x - 1), where k is a constant, and f(5) = 32. What is the value of f(10)?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "67",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 68,
    "stem": "2/5 x + 7/5 y = 2/7; gx + ky = 5/2. In the given system of equations, g and k are constants. The system has infinitely many solutions. What is the value of g/k?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": ".2857|2/7",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 69,
    "stem": "2x - y > 883. For which of the following tables are all the values of x and their corresponding values of y solutions to the given inequality?\n\n[Figure: Each answer choice is a 3-row table of x and y values using the same three x-values (440, 441, 442) arranged in different orders, paired with y-values 0, -2, -4 in different orders. A: (440,0),(441,-2),(442,-4). B: (440,0),(442,-2),(441,-4). C: (442,0),(440,-2),(441,-4). D: (442,0),(441,-2),(440,-4).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Table: x=440,y=0; x=441,y=-2; x=442,y=-4",
      "B": "Table: x=440,y=0; x=442,y=-2; x=441,y=-4",
      "C": "Table: x=442,y=0; x=440,y=-2; x=441,y=-4",
      "D": "Table: x=442,y=0; x=441,y=-2; x=440,y=-4"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 70,
    "stem": "d = 16t. The given equation represents the distance d, in inches, where t represents the number of seconds since an object started moving. Which of the following is the best interpretation of 16 in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The object moved a total of 16 inches.",
      "B": "The object moved a total of 16t inches.",
      "C": "The object is moving at a rate of 16 inches per second.",
      "D": "The object is moving at a rate of 1/16 inches per second."
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 71,
    "stem": "7x + 6y = 5; 28x + 24y = 20. For each real number r, which of the following points lies on the graph of each equation in the xy-plane for the given system?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(r, -6r/7 + 5/7)",
      "B": "(r, 7r/6 + 5/6)",
      "C": "(r/4 + 5, -r/4 + 20)",
      "D": "(-6r/7 + 5/7, r)"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 72,
    "stem": "(p + 3) + 8 = 10. What value of p is the solution to the given equation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-1",
      "B": "5",
      "C": "15",
      "D": "21"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 73,
    "stem": "f(x) = 39. For the given linear function f, which table gives three values of x and their corresponding values of f(x)?\n\n[Figure: Each answer choice is a 3-row table pairing x=0,1,2 with f(x) values: A gives f(x)=0,0,0; B gives f(x)=39,39,39; C gives f(x)=0,39,78; D gives f(x)=39,0,-39.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Table: x=0,f(x)=0; x=1,f(x)=0; x=2,f(x)=0",
      "B": "Table: x=0,f(x)=39; x=1,f(x)=39; x=2,f(x)=39",
      "C": "Table: x=0,f(x)=0; x=1,f(x)=39; x=2,f(x)=78",
      "D": "Table: x=0,f(x)=39; x=1,f(x)=0; x=2,f(x)=-39"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 74,
    "stem": "A manufacturing plant makes 10-inch, 9-inch, and 7-inch frying pans. During a certain day, the number of 10-inch frying pans that the manufacturing plant makes is 4 times the number n of 9-inch frying pans it makes, and the number of 7-inch frying pans it makes is 10. During this day, the manufacturing plant makes 100 frying pans total. Which equation represents this situation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "10(4n) + 9n + 7(10) = 100",
      "B": "10n + 9n + 7n = 100",
      "C": "4n + 10 = 100",
      "D": "5n + 10 = 100"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 75,
    "stem": "A mixture consisting of only vitamin D and calcium has a total mass of 150 grams. The mass of vitamin D in the mixture is 50 grams. What is the mass, in grams, of calcium in the mixture?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "200",
      "B": "150",
      "C": "100",
      "D": "50"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 76,
    "stem": "The function g is defined by g(x) = 6x. For what value of x is g(x) = 54?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "9",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 77,
    "stem": "4x + 5 = 165. What is the solution to the given equation?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "40",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 78,
    "stem": "The graph of the linear function f is shown, where y = f(x). What is the x-intercept of the graph of f?\n\n[Figure: Line graph on xy-plane. X-axis gridlines labeled -20, -16, -12, -8, -4, 0, 4 (spacing of 4). Y-axis gridlines labeled -8, -4, 4, 8 (spacing of 4). The line rises left to right, crossing the x-axis at (-12, 0), extending from roughly (-20, -2) at the lower left up to roughly (4, 5) at the upper right, crossing the y-axis at approximately (0, 3).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(-12, 0)",
      "B": "(0, 0)",
      "C": "(1/4, 0)",
      "D": "(12, 0)"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 79,
    "stem": "A company that provides whale-watching tours takes groups of 21 people at a time. The company's revenue is 80 dollars per adult and 60 dollars per child. If the company's revenue for one group consisting of adults and children was 1,440 dollars, how many people in the group were children?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "3",
      "B": "9",
      "C": "12",
      "D": "18"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 80,
    "stem": "Line k is defined by y = 17/7 x + 4. Line j is parallel to line k in the xy-plane. What is the slope of line j?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "7/17",
      "B": "17/7",
      "C": "4",
      "D": "17"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 81,
    "stem": "-12x + 14y = 36; -6x + 7y = -18. How many solutions does the given system of equations have?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Exactly one",
      "B": "Exactly two",
      "C": "Infinitely many",
      "D": "Zero"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 82,
    "stem": "In August, a car dealer completed 15 more than 3 times the number of sales the car dealer completed in September. In August and September, the car dealer completed 363 sales. How many sales did the car dealer complete in September?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "87",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 83,
    "stem": "In the xy-plane, the graph of the linear function f contains the points (0, 3) and (7, 31). Which equation defines f, where y = f(x)?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(x) = 28x + 34",
      "B": "f(x) = 3x + 38",
      "C": "f(x) = 4x + 3",
      "D": "f(x) = 7x + 3"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 84,
    "stem": "y = 12x - 20\ny = 28\n\nWhat is the solution (x, y) to the given system of equations?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(4, 28)",
      "B": "(20, 28)",
      "C": "(28, 4)",
      "D": "(28, 20)"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 85,
    "stem": "The graph of the linear function f is shown. What is the y-intercept of the graph of y = f(x)?\n\n[Figure: Line graph on xy-plane, x-axis from -8 to 8 (gridlines every 2), y-axis from -1 to 10 (gridlines every 1). Straight line passes through x-intercept (-5, 0), y-intercept (0, 2), and continues through approximately (8, 5); slope is 2/5.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(-5, 0)",
      "B": "(2, 0)",
      "C": "(0, 2)",
      "D": "(0, -5)"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 86,
    "stem": "The point (8, 2) in the xy-plane is a solution to which of the following systems of inequalities?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "x > 0, y > 0",
      "B": "x > 0, y < 0",
      "C": "x < 0, y > 0",
      "D": "x < 0, y < 0"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 87,
    "stem": "5x = 15\n-4x + y = -2\nThe solution to the given system of equations is (x, y). What is the value of x + y?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-17",
      "B": "-13",
      "C": "13",
      "D": "17"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 88,
    "stem": "The cost of renting a backhoe for up to 10 days is $270 for the first day and $135 for each additional day. Which of the following equations gives the cost y, in dollars, of renting the backhoe for x days, where x is a positive integer and x <= 10?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = 270x - 135",
      "B": "y = 270x + 135",
      "C": "y = 135x + 270",
      "D": "y = 135x + 135"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 89,
    "stem": "What value of p satisfies the equation 5p + 180 = 250?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "14",
      "B": "65",
      "C": "86",
      "D": "250"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 90,
    "stem": "A certain open star cluster contains M-type stars and K-type stars. The estimated total mass of M-type and K-type stars in this open star cluster is 127,882 quettagrams. The graph shown models the possible combinations of the number of M-type stars, x, and K-type stars, y, that could be in this open star cluster if all the M-type stars have the same estimated mass and all the K-type stars have the same estimated mass. Based on the graph, which of the following is closest to the estimated mass, in quettagrams, of each M-type star in this cluster?\n\n[Figure: Line graph in xy-plane, x-axis labeled 'Number of M-type stars' ranging 0 to 160 (gridlines every 20), y-axis labeled 'Number of K-type stars' ranging 0 to 160 (gridlines every 20). A straight line goes from approximately (0, 140) on the y-axis down to approximately (158, 0) on the x-axis (x-intercept approximately 158).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "811",
      "B": "938",
      "C": "51,904",
      "D": "75,978"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 91,
    "stem": "The front of a roller-coaster car is at the bottom of a hill and is 15 feet above the ground. If the front of the roller-coaster car rises at a constant rate of 8 feet per second, which of the following equations gives the height h, in feet, of the front of the roller-coaster car s seconds after it starts up the hill?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "h = 8s + 15",
      "B": "h = 15s + 335/8",
      "C": "h = 8s + 335/15",
      "D": "h = 15s + 8"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 92,
    "stem": "According to a model, the head width, in millimeters, of a worker bumblebee can be estimated by adding 0.6 to four times the body weight of the bee, in grams. According to the model, what would be the head width, in millimeters, of a worker bumblebee that has a body weight of 0.5 grams?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "2.6",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 93,
    "stem": "The graph of a system of linear equations is shown. What is the solution (x, y) to the system?\n\n[Figure: xy-plane graph with x-axis from -6 to 6 and y-axis from -6 to 6 (gridlines every 1). A horizontal line at y = 3 spans across the graph. A steep line passes through approximately (0, -3) and (2, 3), rising steeply left to right (slope 3), intersecting the horizontal line at the point (2, 3).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(0, 3)",
      "B": "(1, 3)",
      "C": "(2, 3)",
      "D": "(3, 3)"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 94,
    "stem": "If 3x - 8 = 7, what is the value of 3x + 8?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-1",
      "B": "5",
      "C": "13",
      "D": "23"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 95,
    "stem": "10x = 86\nWhat value of x is the solution to the given equation?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "8.6",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 96,
    "stem": "Line p is defined by 4y + 8x = 6. Line r is perpendicular to line p in the xy-plane. What is the slope of line r?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "1/2",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 97,
    "stem": "If 3x - 27 = 24, what is the value of x - 9?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "1",
      "B": "8",
      "C": "24",
      "D": "35"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 98,
    "stem": "Line p is defined by 2y + 18x = 9. Line r is perpendicular to line p in the xy-plane. What is the slope of line r?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-9",
      "B": "-1/9",
      "C": "1/9",
      "D": "9"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 99,
    "stem": "The graph in the xy-plane models the possible combinations of length x, in meters (m), and width y, in meters, for a rectangle with a perimeter of 36 m. Which statement is the best interpretation of the point (8, 10) in this context?\n\n[Figure: xy-plane line graph, x-axis 0 to 20 (gridlines every 2), y-axis 0 to 20 (gridlines every 2). A line runs from approximately (0, 18) down to (18, 0), with a marked point at (8, 10) on the line.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The length is 10 m less than the perimeter, and the width is 8 m less than the perimeter.",
      "B": "The length is 10 m, and the width is 8 m.",
      "C": "The length is 8 m, and the width is 10 m.",
      "D": "The length is 8 m less than the perimeter, and the width is 10 m less than the perimeter."
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 100,
    "stem": "The function f is defined by f(x) = (7/10)x + 55. What is the value of f(20)?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "69",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 101,
    "stem": "8x - 7x + 130 = 260\nWhat value of x is the solution to the given equation?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "130",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 102,
    "stem": "Adam's school is a 20-minute walk or a 5-minute bus ride away from his house. The bus runs once every 30 minutes, and the number of minutes, w, that Adam waits for the bus varies between 0 and 30. Which of the following inequalities gives the values of w for which it would be faster for Adam to walk to school?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "w - 5 < 20",
      "B": "w - 5 > 20",
      "C": "w + 5 < 20",
      "D": "w + 5 > 20"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 103,
    "stem": "If f is the function defined by f(x) = (2x - 1)/3, what is the value of f(5)?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "4/3",
      "B": "7/3",
      "C": "3",
      "D": "9"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 104,
    "stem": "The number y is 84 less than the number x. Which equation represents the relationship between x and y?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = x + 84",
      "B": "y = (1/84)x",
      "C": "y = 84x",
      "D": "y = x - 84"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 105,
    "stem": "The function f is defined by f(x) = 4x - 3. What is the value of f(10)?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-30",
      "B": "37",
      "C": "40",
      "D": "43"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 106,
    "stem": "The function f is defined by the equation f(x) = 7x + 2. What is the value of f(x) when x = 4?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "30",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 107,
    "stem": "Josie purchased a pass that cost $19.50 to tour a nature preserve. She also purchased 10 identical stickers to give to her nieces and nephews. The pass and the stickers cost $62.00 total. What was the cost of one sticker?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "$1.95",
      "B": "$4.25",
      "C": "$6.20",
      "D": "$8.15"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 108,
    "stem": "At how many points do the graphs of the equations y = x + 20 and y = 8x intersect in the xy-plane?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "8"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 109,
    "stem": "For a snowstorm in a certain town, the minimum rate of snowfall recorded was 0.6 inches per hour, and the maximum rate of snowfall recorded was 1.8 inches per hour. Which inequality is true for all values of s, where s represents a rate of snowfall, in inches per hour, recorded for this snowstorm?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "s >= 2.4",
      "B": "s >= 1.8",
      "C": "0 <= s <= 0.6",
      "D": "0.6 <= s <= 1.8"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 110,
    "stem": "During a portion of a flight, a small airplane's cruising speed varied between 150 miles per hour and 170 miles per hour. Which inequality best represents this situation, where s is the cruising speed, in miles per hour, during this portion of the flight?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "s <= 20",
      "B": "s <= 150",
      "C": "s <= 170",
      "D": "150 <= s <= 170"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 111,
    "stem": "John paid a total of $165 for a microscope by making a down payment of $37 plus p monthly payments of $16 each. Which of the following equations represents this situation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "16p - 37 = 165",
      "B": "37p - 16 = 165",
      "C": "16p + 37 = 165",
      "D": "37p + 16 = 165"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 112,
    "stem": "y = 3x\n2x + y = 12\n\nThe solution to the given system of equations is (x, y). What is the value of 5x?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "24",
      "B": "15",
      "C": "12",
      "D": "5"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 113,
    "stem": "8x + 11y = 170\n\nThe equation gives the possible combinations of the number of 2009 premium grade Log Cabin Pennies, x, and the number of 1996 select grade Lincoln Pennies, y, in a collection that is worth a total of $170. If there are 6 1996 select grade Lincoln Pennies in the collection, how many 2009 premium grade Log Cabin Pennies are in the collection?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "13",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 114,
    "stem": "Valentina bought two containers of beads. In the first container 30% of the beads are red, and in the second container 70% of the beads are red. Together, the containers have at least 400 red beads. Which inequality shows this relationship, where x is the total number of beads in the first container and y is the total number of beads in the second container?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "0.3x + 0.7y >= 400",
      "B": "0.7x + 0.3y <= 400",
      "C": "x/3 + y/7 <= 400",
      "D": "30x + 70y >= 400"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 115,
    "stem": "y = x + 4\n\nWhich table gives three values of x and their corresponding values of y for the given equation?\n\n[Figure: Four two-column tables (x, y), each listing x = 0, 1, 2. Choice A: y = 4, 5, 6. Choice B: y = 6, 5, 4. Choice C: y = 2, 1, 0. Choice D: y = 0, 1, 2.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "x: 0, 1, 2 -> y: 4, 5, 6",
      "B": "x: 0, 1, 2 -> y: 6, 5, 4",
      "C": "x: 0, 1, 2 -> y: 2, 1, 0",
      "D": "x: 0, 1, 2 -> y: 0, 1, 2"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 116,
    "stem": "As part of a science project on evaporation, Amaya measured the height of a liquid in a container over a period of time. The function f(x) = 33 - 0.18x gives the estimated height, in centimeters (cm), of the liquid in the container x days after the start of the project. Which of the following is the best interpretation of 33 in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The estimated height, in cm, of the liquid at the start of the project",
      "B": "The estimated height, in cm, of the liquid at the end of the project",
      "C": "The estimated change in the height, in cm, of the liquid each day",
      "D": "The estimated number of days for all of the liquid to evaporate"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 117,
    "stem": "Leo goes to a packing store to buy containers and tape. Leo has $15. Each container costs $1.87 and each roll of tape costs $2.40. Which inequality represents the relationship between the number of containers, c, and the number of rolls of tape, t, Leo can buy?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "1.87c + 2.40t <= 15",
      "B": "1.87c + 2.40t >= 15",
      "C": "2.40c + 1.87t <= 15",
      "D": "2.40c + 1.87t >= 15"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 118,
    "stem": "Lorenzo purchased a box of cereal and some strawberries at the grocery store. Lorenzo paid $2 for the box of cereal and $1.90 per pound for the strawberries. If Lorenzo paid a total of $9.60 for the box of cereal and the strawberries, which of the following equations can be used to find p, the number of pounds of strawberries Lorenzo purchased? (Assume there is no sales tax.)",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "1.90p + 2 = 9.60",
      "B": "1.90p - 2 = 9.60",
      "C": "1.90 + 2p = 9.60",
      "D": "1.90 - 2p = 9.60"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 119,
    "stem": "24.5x + 24.75y = 641\n\nIsabel ordered topsoil and crushed stone, which cost a total of $641, for her garden. The given equation represents the relationship between the number of cubic yards of topsoil, x, and the number of tons of crushed stone, y, Isabel ordered. How much more, in dollars, did a ton of crushed stone cost Isabel than a cubic yard of topsoil?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "0.25",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 120,
    "stem": "The shaded region shown represents the solutions to an inequality. Which ordered pair (x, y) is a solution to this inequality?\n\n[Figure: xy-plane graph with grid lines every 2 units; x-axis labeled from -6 to 6, y-axis labeled from -6 to 6. A solid steep line with positive slope passes approximately through (0,-4) and (2,6). The region to the right of this line (larger x-values) is shaded gray, extending across the full height of the visible graph, indicating the solution set y <= x-type steep inequality; point (6,-2) falls within the shaded region while (-5,-6), (-2,5), and (1,4) do not.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(-5, -6)",
      "B": "(-2, 5)",
      "C": "(1, 4)",
      "D": "(6, -2)"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 121,
    "stem": "The equation 7g + 7b = 840 represents the number of blue tiles, b, and the number of green tiles, g, an artist needs for an 840-square-inch tile project. The artist needs 71 blue tiles for the project. How many green tiles does he need?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "49",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 122,
    "stem": "The function g is defined by g(x) = -x + 8. What is the value of g(0)?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-8",
      "B": "0",
      "C": "4",
      "D": "8"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 123,
    "stem": "A chemist combines water and acetic acid to make a mixture with a volume of 56 milliliters (mL). The volume of acetic acid in the mixture is 10 mL. What is the volume of water, in mL, in the mixture? (Assume that the volume of the mixture is the sum of the volumes of water and acetic acid before they were mixed.)",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "46",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 124,
    "stem": "y <= x\ny <= -x\nWhich of the following ordered pairs (x, y) is a solution to the system of inequalities above?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(1,0)",
      "B": "(-1,0)",
      "C": "(0,1)",
      "D": "(0,-1)"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 125,
    "stem": "Line t in the xy-plane has a slope of -1/3 and passes through the point (9, 10). Which equation defines line t?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = 13x - 1/3",
      "B": "y = 9x + 10",
      "C": "y = -x/3 + 10",
      "D": "y = -x/3 + 13"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 126,
    "stem": "2n + 6 = 14\nA tree had a height of 6 feet when it was planted. The equation above can be used to find how many years n it took the tree to reach a height of 14 feet. Which of the following is the best interpretation of the number 2 in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The number of years it took the tree to double its height",
      "B": "The average number of feet that the tree grew per year",
      "C": "The height, in feet, of the tree when the tree was 1 year old",
      "D": "The average number of years it takes similar trees to grow 14 feet"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 127,
    "stem": "2x + 16 = a(x + 8)\nIn the given equation, a is a constant. If the equation has infinitely many solutions, what is the value of a?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "2",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 128,
    "stem": "In the xy-plane, line t passes through the points (0, 9) and (1, 17). Which equation defines line t?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = (1/8)x + 9",
      "B": "y = x + 1/8",
      "C": "y = x + 8",
      "D": "y = 8x + 9"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 129,
    "stem": "If x/8 = 5, what is the value of 8/x?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": ".2|1/5",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 130,
    "stem": "A machine makes large boxes or small boxes, one at a time, for a total of 700 minutes each day. It takes the machine 10 minutes to make a large box or 5 minutes to make a small box. Which equation represents the possible number of large boxes, x, and small boxes, y, the machine can make each day?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "5x + 10y = 700",
      "B": "10x + 5y = 700",
      "C": "(x + y)(10 + 5) = 700",
      "D": "(10 + x)(5 + y) = 700"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 131,
    "stem": "The perimeter of an isosceles triangle is 83 inches. Each of the two congruent sides of the triangle has a length of 24 inches. What is the length, in inches, of the third side?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "35",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 132,
    "stem": "If 3x = 30, what is the value of 3x - 12?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-2",
      "B": "18",
      "C": "22",
      "D": "42"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 133,
    "stem": "(b - 2)x = 8\nIn the given equation, b is a constant. If the equation has no solution, what is the value of b?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "2",
      "B": "4",
      "C": "6",
      "D": "10"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 134,
    "stem": "Line r in the xy-plane has a slope of 4 and passes through the point (0, 6). Which equation defines line r?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = -6x + 4",
      "B": "y = 6x + 4",
      "C": "y = 4x - 6",
      "D": "y = 4x + 6"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 135,
    "stem": "A total of 364 paper straws of equal length were used to construct two types of polygons: triangles and rectangles. The triangles and rectangles were constructed so that no two polygons had a common side. The equation 3x + 4y = 364 represents this situation, where x is the number of triangles constructed and y is the number of rectangles constructed. What is the best interpretation of (x, y) = (24, 73) in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "If 24 triangles were constructed, then 73 rectangles were constructed.",
      "B": "If 24 triangles were constructed, then 73 paper straws were used.",
      "C": "If 73 triangles were constructed, then 24 rectangles were constructed.",
      "D": "If 73 triangles were constructed, then 24 paper straws were used."
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 136,
    "stem": "An economist modeled the demand Q for a certain product as a linear function of the selling price P. The demand was 20,000 units when the selling price was $40 per unit, and the demand was 15,000 units when the selling price was $60 per unit. Based on the model, what is the demand, in units, when the selling price is $55 per unit?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "16,250",
      "B": "16,500",
      "C": "16,750",
      "D": "17,500"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 137,
    "stem": "The table shows two values of x and their corresponding values of y. The graph of the linear equation representing this relationship passes through the point (1/4, a). What is the value of a?\n\n[Figure: Table with two columns, x and y, and two data rows: x = -12, y = -45; x = 6, y = 45.]",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "65/4",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 138,
    "stem": "A certain apprentice has enrolled in 85 hours of training courses. The equation 10x + 15y = 85 represents this situation, where x is the number of on-site training courses and y is the number of online training courses this apprentice has enrolled in. How many more hours does each online training course take than each on-site training course?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "5",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 139,
    "stem": "Hiro and Sofia purchased shirts and pants from a store. The price of each shirt purchased was the same and the price of each pair of pants purchased was the same. Hiro purchased 4 shirts and 2 pairs of pants for $86, and Sofia purchased 3 shirts and 5 pairs of pants for $166. Which of the following systems of linear equations represents the situation, if x represents the price, in dollars, of each shirt and y represents the price, in dollars, of each pair of pants?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "4x + 2y = 86; 3x + 5y = 166",
      "B": "4x + 3y = 86; 2x + 5y = 166",
      "C": "4x + 2y = 166; 3x + 5y = 86",
      "D": "4x + 3y = 166; 2x + 5y = 86"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 140,
    "stem": "d = 16 - x/30. The equation shown gives the estimated amount of diesel d, in gallons, that remains in the gas tank of a truck after being driven x miles, where 0 <= x <= 480. What is the estimated amount of diesel, in gallons, that remains in the gas tank of the truck when x = 300?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "0",
      "B": "6",
      "C": "14",
      "D": "16"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 141,
    "stem": "ax + by = 72; 6x + 2by = 56. In the given system of equations, a and b are constants. The graphs of these equations in the xy-plane intersect at the point (4, y). What is the value of a?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "3",
      "B": "4",
      "C": "6",
      "D": "14"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 142,
    "stem": "The shaded region shown represents the solutions to the inequality ry < 60, where r is a constant. What is the value of r?\n\n[Figure: xy-plane grid; both axes labeled from -8 to 8 in increments of 2 along the x-axis, and y-axis marked at 2 (above origin) and -2, -4, -6, -8, -10 (below origin). A horizontal dashed boundary line is drawn at y = -4, spanning the full width shown (x from -8 to 8). The region above this line (from y = -4 up through y = 2, i.e., y > -4) is shaded gray across the entire horizontal extent; the region below the line (y < -4) is unshaded.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "15",
      "B": "4",
      "C": "-4",
      "D": "-15"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 143,
    "stem": "A store sells two different-sized containers of a certain Greek yogurt. The store's sales of this Greek yogurt totaled 1,277.94 dollars last month. The equation 5.48x + 7.30y = 1,277.94 represents this situation, where x is the number of smaller containers sold and y is the number of larger containers sold. According to the equation, which of the following represents the price, in dollars, of each smaller container?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "5.48",
      "B": "7.30y",
      "C": "7.30",
      "D": "5.48x"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 144,
    "stem": "7(2x - 3) = 63. Which equation has the same solution as the given equation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "2x - 3 = 9",
      "B": "2x - 3 = 56",
      "C": "2x - 21 = 63",
      "D": "2x - 21 = 70"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 145,
    "stem": "Line k is defined by y = 3x + 15. Line j is perpendicular to line k in the xy-plane. What is the slope of line j?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-1/3",
      "B": "-1/12",
      "C": "-1/18",
      "D": "-1/45"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 146,
    "stem": "A contract for a certain service requires a onetime activation cost of $35 and a monthly cost of $23. Which equation represents this situation, where c is the total cost, in dollars, of this service contract for t months?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "c = t/23 + 35",
      "B": "c = t/35 + 23",
      "C": "c = 23t + 35",
      "D": "c = 35t + 23"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 147,
    "stem": "An employee at a restaurant prepares sandwiches and salads. It takes the employee 1.5 minutes to prepare a sandwich and 1.9 minutes to prepare a salad. The employee spends a total of 46.1 minutes preparing x sandwiches and y salads. Which equation represents this situation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "1.9x + 1.5y = 46.1",
      "B": "1.5x + 1.9y = 46.1",
      "C": "x + y = 46.1",
      "D": "30.7x + 24.3y = 46.1"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 148,
    "stem": "F(x) = 9/5(x - 273.15) + 32. The function F gives the temperature, in degrees Fahrenheit, that corresponds to a temperature of x kelvins. If a temperature increased by 9.10 kelvins, by how much did the temperature increase, in degrees Fahrenheit?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "16.38",
      "B": "48.38",
      "C": "475.29",
      "D": "507.29"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 149,
    "stem": "4x/5 = 20. In the equation above, what is the value of x?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "25",
      "B": "24",
      "C": "16",
      "D": "15"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 150,
    "stem": "The pressure exerted on a scuba diver at sea level is 14.70 pounds per square inch (psi). For each foot the scuba diver descends below sea level, the pressure exerted on the scuba diver increases by 0.44 psi. What is the total pressure, in psi, exerted on the scuba diver at 105 feet below sea level?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "60.90",
      "B": "31.50",
      "C": "14.70",
      "D": "0.44"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 151,
    "stem": "A truck can haul a maximum weight of 5,630 pounds. During one trip, the truck will be used to haul a 190-pound piece of equipment as well as several crates. Some of these crates weigh 25 pounds each and the others weigh 62 pounds each. Which inequality represents the possible combinations of the number of 25-pound crates, x, and the number of 62-pound crates, y, the truck can haul during one trip if only the piece of equipment and the crates are being hauled?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "25x + 62y ≤ 5,440",
      "B": "25x + 62y ≥ 5,440",
      "C": "62x + 25y ≤ 5,630",
      "D": "62x + 25y ≥ 5,630"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 152,
    "stem": "x + 5y = 5. 2x - y = -4. Which of the following graphs in the xy-plane could be used to solve the system of equations above?\n\n[Figure: Four small answer-choice xy-plane graphs (A-D), gridlines -4 to 4 both axes, each showing two lines. Choice C correct: one line has x-intercept (5,0) & y-intercept (0,1) [x+5y=5], other has x-intercept (-2,0) & y-intercept (0,4) [2x-y=-4].]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Graph showing two intersecting lines that do not pass through (0,1)&(5,0) or (0,4)&(-2,0)",
      "B": "Graph showing two intersecting lines that do not pass through (0,1)&(5,0) or (0,4)&(-2,0)",
      "C": "Graph showing one line through (0,1)&(5,0) and another through (0,4)&(-2,0) — correct",
      "D": "Graph with one correct line through (0,4)&(-2,0) but the other incorrect"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 153,
    "stem": "3(kx + 13) = 48/17 x + 36. In the given equation, k is a constant. The equation has no solution. What is the value of k?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": ".9411|.9412|16/17",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 154,
    "stem": "The function f is defined by f(x) = 7x - 84. What is the x-intercept of the graph of y = f(x) in the xy-plane?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(-12, 0)",
      "B": "(-7, 0)",
      "C": "(7, 0)",
      "D": "(12, 0)"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 155,
    "stem": "The table gives the average time t, in minutes, it takes Carly to travel a certain distance d, in kilometers. Which equation could represent this linear relationship?\n\n[Figure: Table: Distance(km)/Average time(min): (0.32,8),(0.56,14),(0.68,17).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "t = 4d",
      "B": "t = 1/25 d",
      "C": "t = 25d",
      "D": "t = 1/4 d"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 156,
    "stem": "The table shows four values of x and their corresponding values of f(x). There is a linear relationship between x and f(x) that is defined by the equation f(x) = mx - 28, where m is a constant. What is the value of m?\n\n[Figure: Table: x(10,15,20,25) f(x)(82,137,192,247).]",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "11",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 157,
    "stem": "Julissa needs at least 100 hours of flight time to get her private pilot certification. If Julissa already has 86 hours of flight time, what is the minimum number of additional hours of flight time Julissa needs to get her private pilot certification?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "14",
      "B": "76",
      "C": "86",
      "D": "186"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 158,
    "stem": "The graph of the linear function y = f(x) + 19 is shown. If c and d are positive constants, which equation could define f?\n\n[Figure: Graph of y=f(x)+19; x-axis -4 to 4 gridlines 1; y-axis 0-10+ gridlines 2. Steep negative slope line, y-intercept (0,3) per rationale, entering near (-1.3,10) exiting near (1, below 0).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(x) = -d - cx",
      "B": "f(x) = d - cx",
      "C": "f(x) = -d + cx",
      "D": "f(x) = d + cx"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 159,
    "stem": "x = 10. y = x + 21. The solution to the given system of equations is (x, y). What is the value of y?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "2.1",
      "B": "10",
      "C": "21",
      "D": "31"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 160,
    "stem": "y = -1/9 x. y = 1/2 x. The solution to the given system of equations is (x, y). What is the value of x?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-9",
      "B": "-7",
      "C": "0",
      "D": "2"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 161,
    "stem": "A salesperson's total earnings consist of a base salary of x dollars per year, plus commission earnings of 11% of the total sales the salesperson makes during the year. This year, the salesperson has a goal for the total earnings to be at least 3 times and at most 4 times the base salary. Which of the following inequalities represents all possible values of total sales s, in dollars, the salesperson can make this year in order to meet that goal?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "2x ≤ s ≤ 3x",
      "B": "(2/0.11)x ≤ s ≤ (3/0.11)x",
      "C": "3x ≤ s ≤ 4x",
      "D": "(3/0.11)x ≤ s ≤ (4/0.11)x"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 162,
    "stem": "For the linear function f, the table shows three values of x and their corresponding values of f(x). If h(x) = f(x) - 13, which equation defines h?\n\n[Figure: Table: x/f(x): (-4,0),(-19/5,1),(-18/5,2).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "h(x) = 5x - 4",
      "B": "h(x) = 5x + 7",
      "C": "h(x) = 5x + 9",
      "D": "h(x) = 5x + 20"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 163,
    "stem": "Which of the following is equivalent to 4x + 6 = 12?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "2x + 4 = 6",
      "B": "x + 3 = 3",
      "C": "3x + 2 = 4",
      "D": "2x + 3 = 6"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 164,
    "stem": "What is the slope of the graph of 10x - 5y = -12 in the xy-plane?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-2",
      "B": "-5/6",
      "C": "5/6",
      "D": "2"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 165,
    "stem": "In the xy-plane, line p has a slope of -5/3 and an x-intercept of (-6, 0). What is the y-coordinate of the y-intercept of line p?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "-10",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 166,
    "stem": "One pound of grapes costs $2. At this rate, how many dollars will c pounds of grapes cost?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "2c",
      "B": "2 + c",
      "C": "2/c",
      "D": "c/2"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 167,
    "stem": "The graph of the function f, where y = f(x), gives the total cost y, in dollars, for a certain video game system and x games. What is the best interpretation of the slope of the graph in this context?\n\n[Figure: Line graph in xy-plane; x-axis 'x' 0-10 (games), y-axis 'y' 0-500 (cost $), gridlines every 50 on y, every 1 on x. Line starts (0,100), through (1,125), to (10,350). Slope=25, y-intercept=100.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Each game costs $25.",
      "B": "The video game system costs $100.",
      "C": "The video game system costs $25.",
      "D": "Each game costs $100."
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 168,
    "stem": "A bus traveled on the highway and on local roads to complete a trip of 160 miles. The trip took 4 hours. The bus traveled at an average speed of 55 miles per hour (mph) on the highway and an average speed of 25 mph on local roads. If x is the time, in hours, the bus traveled on the highway and y is the time, in hours, it traveled on local roads, which system of equations represents this situation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "55x + 25y = 4; x + y = 160",
      "B": "55x + 25y = 160; x + y = 4",
      "C": "25x + 55y = 4; x + y = 160",
      "D": "25x + 55y = 160; x + y = 4"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 169,
    "stem": "On a 210-mile trip, Cameron drove at an average speed of 60 miles per hour for the first x hours. He then completed the trip, driving at an average speed of 50 miles per hour for the remaining y hours. If x = 1, what is the value of y?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "3",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 170,
    "stem": "For the linear function f, the graph of y = f(x) in the xy-plane has a slope of 2 and has a y-intercept at (0, -5). Which equation defines f?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(x) = (1/2)x - 5",
      "B": "f(x) = -(1/2)x - 5",
      "C": "f(x) = -2x - 5",
      "D": "f(x) = 2x - 5"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 171,
    "stem": "Ty set a goal to walk at least 24 kilometers every day to prepare for a multiday hike. On a certain day, Ty plans to walk at an average speed of 4 kilometers per hour. What is the minimum number of hours Ty must walk on that day to fulfill the daily goal?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "4",
      "B": "6",
      "C": "20",
      "D": "24"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 172,
    "stem": "y = 2x + 3, x = 1. What is the solution (x,y) to the given system of equations?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(1,2)",
      "B": "(1,5)",
      "C": "(2,3)",
      "D": "(2,7)"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 173,
    "stem": "A system of two linear equations is graphed in the xy-plane below. Which of the following points is the solution to the system of equations?\n\n[Figure: xy-plane graph, x-axis -4 to 16 (gridlines even integers), y-axis -4 to 20 (gridlines even integers). Two lines intersect at (3,9), marked/labeled.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(3,9)",
      "B": "(6,15)",
      "C": "(8,10)",
      "D": "(12,18)"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 174,
    "stem": "f(x) = 45x + 600. The function f gives the monthly fee f(x), in dollars, a facility charges to keep x crates in storage. What is the monthly fee, in dollars, the facility charges to keep 50 crates in storage?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "2850",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 175,
    "stem": "For a literature class, a student's essay needs to have no more than 5,000 words. If a student's essay already has 3,026 words, what is the maximum number of additional words the student can include in the essay?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "1,974",
      "B": "3,026",
      "C": "5,000",
      "D": "8,026"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 176,
    "stem": "The function f is defined by f(x) = 80 - 6x. What is the value of f(7)?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "13",
      "B": "38",
      "C": "74",
      "D": "81"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 177,
    "stem": "If 46 = 16 + 2(x - 8), what is the value of 2(x - 8)?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "16",
      "B": "23",
      "C": "30",
      "D": "38"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 178,
    "stem": "The functions f and g are defined as f(x) = (1/4)x - 9 and g(x) = (3/4)x + 21. If the function h is defined as h(x) = f(x) + g(x), what is the x-coordinate of the x-intercept of the graph of y = h(x) in the xy-plane?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "-12",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 179,
    "stem": "A principal used a total of 25 flags that were either blue or yellow for field day. The principal used 20 blue flags. How many yellow flags were used?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "5",
      "B": "20",
      "C": "25",
      "D": "30"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 180,
    "stem": "During a month, Morgan ran r miles at 5 miles per hour and biked b miles at 10 miles per hour. She ran and biked a total of 200 miles that month, and she biked for twice as many hours as she ran. What is the total number of miles that Morgan biked during the month?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "80",
      "B": "100",
      "C": "120",
      "D": "160"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 181,
    "stem": "x + 3 = -2y + 5\nx - 3 = 2y + 7\nThe solution to the given system of equations is (x, y). What is the value of 2x?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-2",
      "B": "6",
      "C": "12",
      "D": "24"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 182,
    "stem": "8x = 88\nWhat value of x is the solution to the given equation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "11",
      "B": "80",
      "C": "96",
      "D": "704"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 183,
    "stem": "Line j is shown in the xy-plane. Line k (not shown) is parallel to line j. What is the slope of line k?\n\n[Figure: xy-plane x-axis -6 to 6, y-axis -6 to 10. Line j steep, through (0,5) and (1,9).]",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "4",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 184,
    "stem": "In the xy-plane, line l passes through the point (0, 0) and is parallel to the line represented by the equation y = 8x + 2. If line l also passes through the point (3, d), what is the value of d?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "24",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 185,
    "stem": "f(x) = x + 8/11. The function f is defined by the given equation. What is the value of f(x) when x = 3/11?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "1",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 186,
    "stem": "Brian saves 2/5 of the $215 he earns each week from his job. If Brian continues to save at this rate, how much money, in dollars, will Brian save in 9 weeks?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "774",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 187,
    "stem": "What is the slope of the graph of y = (1/3)(29x + 10) + 5x in the xy-plane?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "14.66|14.67|44/3",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 188,
    "stem": "One gallon of stain will cover 170 square feet of a surface. A yard has a total fence area of w square feet. Which equation represents the total amount of stain S, in gallons, needed to stain the fence in this yard twice?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "S = w/170",
      "B": "S = 170w",
      "C": "S = 340w",
      "D": "S = w/85"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 189,
    "stem": "For the linear function h, the graph of y = h(x) in the xy-plane passes through the points (7, 21) and (9, 25). Which equation defines h?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "h(x) = (1/2)x - 7/2",
      "B": "h(x) = 2x + 7",
      "C": "h(x) = 7x + 21",
      "D": "h(x) = 9x + 25"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 190,
    "stem": "f(x) = 8x + 4. The function f gives the estimated height, in feet, of a willow tree x years after its height was first measured. Which statement is the best interpretation of 4 in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The tree will be measured each year for 4 years.",
      "B": "The tree is estimated to grow to a maximum height of 4 feet.",
      "C": "The estimated height of the tree increased by 4 feet each year.",
      "D": "The estimated height of the tree was 4 feet when it was first measured."
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 191,
    "stem": "Tom scored 85, 78, and 98 on his first three exams in history class. Solving which inequality gives the score, G, on Tom's fourth exam that will result in a mean score on all four exams of at least 90?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "90 - (85 + 78 + 98) ≤ 4G",
      "B": "4G + 85 + 78 + 98 ≥ 360",
      "C": "(G + 85 + 78 + 98)/4 ≥ 90",
      "D": "(85 + 78 + 98)/4 ≥ 90 - 4G"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 192,
    "stem": "In the system of equations below, a and c are constants. (1/2)x + (1/3)y = 1/6. ax + y = c. If the system of equations has an infinite number of solutions (x, y), what is the value of a?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-1/2",
      "B": "0",
      "C": "1/2",
      "D": "3/2"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 193,
    "stem": "Sean rents a tent at a cost of $11 per day plus a onetime insurance fee of $10. Which equation represents the total cost c, in dollars, to rent the tent with insurance for d days?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "c = 11(d + 10)",
      "B": "c = 10(d + 11)",
      "C": "c = 11d + 10",
      "D": "c = 10d + 11"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 194,
    "stem": "The graph of y = f(x) + 14 is shown. Which equation defines function f?\n\n[Figure: xy-plane grid, x-axis -10 to 10, y-axis -10 to 10 (gridlines every 2). Shallow negative-slope line through y-intercept (0,2) and point (4,1), from about (-10,4.5) to (10,-0.5).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(x) = -1/4x - 12",
      "B": "f(x) = -1/4x + 16",
      "C": "f(x) = -1/4x + 2",
      "D": "f(x) = -1/4x - 14"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 195,
    "stem": "Keenan made 32 cups of vegetable broth. Keenan then filled x small jars and y large jars with all the vegetable broth he made. The equation 3x + 5y = 32 represents this situation. Which is the best interpretation of 5y in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The number of large jars Keenan filled",
      "B": "The number of small jars Keenan filled",
      "C": "The total number of cups of vegetable broth in the large jars",
      "D": "The total number of cups of vegetable broth in the small jars"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 196,
    "stem": "During spring migration, a dragonfly traveled a minimum of 1,510 miles and a maximum of 4,130 miles between stopover locations. Which inequality represents this situation, where d is a possible distance, in miles, this dragonfly traveled between stopover locations during spring migration?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "d ≤ 1,510",
      "B": "1,510 ≤ d ≤ 4,130",
      "C": "d ≥ 4,130",
      "D": "4,130 ≤ d ≤ 5,640"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 197,
    "stem": "The boiling point of water at sea level is 212 degrees Fahrenheit (°F). For every 550 feet above sea level, the boiling point of water is lowered by about 1°F. Which of the following equations can be used to find the boiling point B of water, in °F, x feet above sea level?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "B = 550 + x/212",
      "B": "B = 550 - x/212",
      "C": "B = 212 + x/550",
      "D": "B = 212 - x/550"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 198,
    "stem": "y < -4x + 4. Which point (x, y) is a solution to the given inequality in the xy-plane?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(-4, 0)",
      "B": "(0, 5)",
      "C": "(2, 1)",
      "D": "(2, -1)"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 199,
    "stem": "Some values of the linear function f are shown in the table above. Which of the following defines f?\n\n[Figure: Table x/f(x): (1,5),(3,13),(5,21).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(x) = 2x + 3",
      "B": "f(x) = 3x + 2",
      "C": "f(x) = 4x + 1",
      "D": "f(x) = 5x"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 200,
    "stem": "f(x) = 14 + 4x. The function f represents the total cost, in dollars, of attending an arcade when x games are played. How many games can be played for a total cost of $58?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "11",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 201,
    "stem": "The graph shows the possible combinations of the number of pounds of tangerines and lemons that could be purchased for $18 at a certain store. If Melvin purchased lemons and 4 pounds of tangerines for a total of $18, how many pounds of lemons did he purchase?\n\n[Figure: Line graph, x-axis 'Pounds of tangerines' 0-10, y-axis 'Pounds of lemons' 0-20 (gridlines every 2). Downward line from (0,18) to (9,0).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "7",
      "B": "10",
      "C": "14",
      "D": "16"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 202,
    "stem": "A bus is traveling at a constant speed along a straight portion of road. The equation d = 30t gives the distance d, in feet from a road marker, that the bus will be t seconds after passing the marker. How many feet from the marker will the bus be 2 seconds after passing the marker?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "30",
      "B": "32",
      "C": "60",
      "D": "90"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 203,
    "stem": "y = 4x + 1, 4y = 15x - 8. The solution to the given system of equations is (x, y). What is the value of x - y?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "35",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 204,
    "stem": "The cost y, in dollars, for a manufacturer to make x rings is represented by the line shown. What is the cost, in dollars, for the manufacturer to make 60 rings?\n\n[Figure: Line graph, x-axis 'number of rings' 0-100 gridlines 10, y-axis 'cost' 0-300 gridlines 50. Line through (0,100),(100,225); at x=60 y=175.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "100",
      "B": "125",
      "C": "175",
      "D": "225"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 205,
    "stem": "3 more than 8 times a number x is equal to 83. Which equation represents this situation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(3)(8)x = 83",
      "B": "8x = 83 + 3",
      "C": "3x + 8 = 83",
      "D": "8x + 3 = 83"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 206,
    "stem": "7x - 5y = 4, 4x - 8y = 9. If (x, y) is the solution to the system of equations above, what is the value of 3x + 3y?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-13",
      "B": "-5",
      "C": "5",
      "D": "13"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 207,
    "stem": "What is an equation of the graph shown?\n\n[Figure: Line graph, x-axis -10 to 10, y-axis -16 to 16 (gridlines every 2). Line through (0,-8) and (-8,0), continuing through ~(6,-14).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = -2x - 8",
      "B": "y = x - 8",
      "C": "y = -x - 8",
      "D": "y = 2x - 8"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 208,
    "stem": "The function f is defined by f(x) = 3x - 8. What is the value of f(7)?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "29",
      "B": "13",
      "C": "-5",
      "D": "-29"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 209,
    "stem": "A city's total expense budget for one year was x million dollars. The city budgeted y million dollars for departmental expenses and 201 million dollars for all other expenses. Which of the following represents the relationship between x and y in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "x + y = 201",
      "B": "x - y = 201",
      "C": "2x - y = 201",
      "D": "y - x = 201"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 210,
    "stem": "y = -1/5 x, y = 1/7 x. The solution to the given system of equations is (x, y). What is the value of x?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-5",
      "B": "0",
      "C": "2",
      "D": "7"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 211,
    "stem": "4x = 20, -3x + y = -7. The solution to the given system of equations is (x, y). What is the value of x + y?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-27",
      "B": "-13",
      "C": "13",
      "D": "27"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 212,
    "stem": "The graph of the linear function f is shown, where y = f(x). What is the y-intercept of the graph of f?\n\n[Figure: Line graph, x-axis -2 to 14, y-axis -1 to 9 (gridlines every 1). Steep negative-slope line through (0,8), crosses x-axis ~x=5.5-6.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(0, 0)",
      "B": "(0, -16/11)",
      "C": "(0, -8)",
      "D": "(0, 8)"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 213,
    "stem": "A certain elephant weighs 200 pounds at birth and gains more than 2 but less than 3 pounds per day during its first year. Which of the following inequalities represents all possible weights w, in pounds, for the elephant 365 days after birth?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "400 < w < 600",
      "B": "565 < w < 930",
      "C": "730 < w < 1,095",
      "D": "930 < w < 1,295"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 214,
    "stem": "f(x) = (x + 7)/4. For the function f defined above, what is the value of f(9) - f(1)?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "1",
      "B": "2",
      "C": "1/4",
      "D": "9/4"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 215,
    "stem": "a(3 - x) - b = -1 - 2x. In the equation above, a and b are constants. If the equation has infinitely many solutions, what are the values of a and b?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "a = 2 and b = 1",
      "B": "a = 2 and b = 7",
      "C": "a = -2 and b = 5",
      "D": "a = -2 and b = -5"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 216,
    "stem": "A sample of a certain alloy has a total mass of 50.0 grams and is 50.0% silicon by mass. The sample was created by combining two pieces of different alloys. The first piece was 30.0% silicon by mass and the second piece was 80.0% silicon by mass. What was the mass, in grams, of the silicon in the second piece?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "9.0",
      "B": "16.0",
      "C": "20.0",
      "D": "30.0"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 217,
    "stem": "A total of 165 people contributed to a charity event as either a donor or a volunteer. 130 people contributed as a donor. How many people contributed as a volunteer?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "35",
      "B": "130",
      "C": "165",
      "D": "330"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 218,
    "stem": "4x + 6 = 18. Which equation has the same solution as the given equation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "4x = 108",
      "B": "4x = 24",
      "C": "4x = 12",
      "D": "4x = 3"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 219,
    "stem": "An event planner is planning a party. It costs the event planner a onetime fee of $35 to rent the venue and $10.25 per attendee. The event planner has a budget of $300. What is the greatest number of attendees possible without exceeding the budget?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "25",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 220,
    "stem": "For a party, 50 dinner rolls are needed. Dinner rolls are sold in packages of 12. What is the minimum number of packages that should be bought for the party?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "5",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 221,
    "stem": "ax + by = b. In the equation above, a and b are constants and 0 < a < b. Which of the following could represent the graph of the equation in the xy-plane?\n\n[Figure: Four small xy-coordinate grids (A-D), y-intercept marked '1' near origin. A: steep positive slope. B: steep negative slope (steeper than -1). C(correct): shallow negative slope between -1 and 0. D: very steep positive slope.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Steep positive-slope line, y-intercept ~1",
      "B": "Steep negative-slope line (steeper than -1), y-intercept ~1",
      "C": "Shallow negative-slope line (between -1 and 0), y-intercept ~1 — correct",
      "D": "Very steep positive-slope line, y-intercept ~1"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 222,
    "stem": "H = 120p + 60. The Karvonen formula above shows the relationship between Alice's target heart rate H, in beats per minute (bpm), and the intensity level p of different activities. When p = 0, Alice has a resting heart rate. When p = 1, Alice has her maximum heart rate. It is recommended that p be between 0.5 and 0.85 for Alice when she trains. Which of the following inequalities describes Alice's target training heart rate?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "120 ≤ H ≤ 162",
      "B": "102 ≤ H ≤ 120",
      "C": "60 ≤ H ≤ 162",
      "D": "60 ≤ H ≤ 102"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 223,
    "stem": "The function h is defined by h(x) = 3x - 7. What is the value of h(-2)?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-13",
      "B": "-10",
      "C": "10",
      "D": "13"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 224,
    "stem": "2(kx - n) = -28/15 x - 36/19. In the given equation, k and n are constants and n > 1. The equation has no solution. What is the value of k?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "-.9333|-14/15",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 225,
    "stem": "y = -4x + 40. Which table gives three values of x and their corresponding values of y for the given equation?\n\n[Figure: Four 3-row tables (x,y), listed in choices.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "x=0,1,2; y=0,-4,-8",
      "B": "x=0,1,2; y=40,44,48",
      "C": "x=0,1,2; y=40,36,32",
      "D": "x=0,1,2; y=0,4,8"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 226,
    "stem": "An agricultural scientist studying the growth of corn plants recorded the height of a corn plant at the beginning of a study and the height of the plant each day for the next 12 days. The scientist found that the height of the plant increased by an average of 1.20 centimeters per day for the 12 days. If the height of the plant on the last day of the study was 36.8 centimeters, what was the height, in centimeters, of the corn plant at the beginning of the study?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "22.4",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 227,
    "stem": "For the linear function f, the table shows three values of x and their corresponding values of f(x): when x=0, f(x)=29; when x=1, f(x)=32; when x=2, f(x)=35. Which equation defines f(x)?\n\n[Figure: Table x/f(x): (0,29),(1,32),(2,35).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(x) = 3x + 29",
      "B": "f(x) = 29x + 32",
      "C": "f(x) = 35x + 29",
      "D": "f(x) = 32x + 35"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 228,
    "stem": "The points plotted in the coordinate plane above represent the possible numbers of wallflowers and cornflowers that someone can buy at the Garden Store in order to spend exactly $24.00 total on the two types of flowers. The price of each wallflower is the same and the price of each cornflower is the same. What is the price, in dollars, of 1 cornflower?\n\n[Figure: Scatter plot 'Number of Cornflowers and Wallflowers at Garden Store'. X-axis 'Number of cornflowers' 0-20 gridlines 2. Y-axis 'Number of wallflowers' 0-20 gridlines 2. Points along descending line ~(0,12),(4,9),(8,6),(12,4),(16,0).]",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "1.5",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 229,
    "stem": "A small business owner budgets $2,200 to purchase candles. The owner must purchase a minimum of 200 candles to maintain the discounted pricing. If the owner pays $4.90 per candle to purchase small candles and $11.60 per candle to purchase large candles, what is the maximum number of large candles the owner can purchase to stay within the budget and maintain the discounted pricing?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "182",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 230,
    "stem": "1/3(x+6) - 1/2(x+6) = -8. What value of x is the solution to the given equation?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "42",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 231,
    "stem": "A number x is at most 17 less than 5 times the value of y. If the value of y is 3, what is the greatest possible value of x?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "-2",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 232,
    "stem": "A food truck buys forks for $0.04 each and plates for $0.48 each. The total cost of x forks and y plates is $661.76. Which equation represents this situation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "0.48x - 0.04y = 661.76",
      "B": "0.04x - 0.48y = 661.76",
      "C": "0.48x + 0.04y = 661.76",
      "D": "0.04x + 0.48y = 661.76"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 233,
    "stem": "The table shows three values of x and their corresponding values of y, where s is a constant. There is a linear relationship between x and y. Which of the following equations represents this relationship?\n\n[Figure: Table x/y: (-2s,24),(-s,21),(s,15).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "sx + 3y = 18s",
      "B": "3x + sy = 18s",
      "C": "3x + sy = 18",
      "D": "sx + 3y = 18"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 234,
    "stem": "The graph of 7x + 2y = -31 in the xy-plane has an x-intercept at (a, 0) and a y-intercept at (0, b), where a and b are constants. What is the value of b/a?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-7/2",
      "B": "-2/7",
      "C": "2/7",
      "D": "7/2"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 235,
    "stem": "The score on a trivia game is obtained by subtracting the number of incorrect answers from twice the number of correct answers. If a player answered 40 questions and obtained a score of 50, how many questions did the player answer correctly?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "30",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 236,
    "stem": "Nasir bought 9 storage bins that were each the same price. He used a coupon for $63 off the entire purchase. The cost for the entire purchase after using the coupon was $27. What was the original price, in dollars, for 1 storage bin?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "10",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 237,
    "stem": "The graph shows the relationship between the number of shares of stock from Company A, x, and the number of shares of stock from Company B, y, that Simone can purchase. Which equation could represent this relationship?\n\n[Figure: Line graph, x-axis 'Company A' 0-100 gridlines 10, y-axis 'Company B' 0-50 gridlines 10. Line from (0,40) to (60,0).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = 8x + 12",
      "B": "8x + 12y = 480",
      "C": "y = 12x + 8",
      "D": "12x + 8y = 480"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 238,
    "stem": "4x + 3y = 24. Mario purchased 4 binders that cost x dollars each and 3 notebooks that cost y dollars each. If the given equation represents this situation, which of the following is the best interpretation of 24 in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The total cost, in dollars, for all binders purchased",
      "B": "The total cost, in dollars, for all notebooks purchased",
      "C": "The total cost, in dollars, for all binders and notebooks purchased",
      "D": "The difference in the total cost, in dollars, between the number of binders and notebooks purchased"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 239,
    "stem": "48x - 72y = 30y + 24. ry = 1/6 - 16x. In the given system of equations, r is a constant. If the system has no solution, what is the value of r?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "-34",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 240,
    "stem": "10 = 2x + 4. How many solutions exist to the equation shown above?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "None",
      "B": "Exactly 1",
      "C": "Exactly 3",
      "D": "Infinitely many"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 241,
    "stem": "For a training program, Juan rides his bike at an average rate of 5.7 minutes per mile. Which function m models the number of minutes it will take Juan to ride x miles at this rate?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "m(x) = x/5.7",
      "B": "m(x) = x + 5.7",
      "C": "m(x) = x - 5.7",
      "D": "m(x) = 5.7x"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 242,
    "stem": "For the linear function f, the table shows three values of x and their corresponding values of f(x). Function f is defined by f(x) = ax + b, where a and b are constants. What is the value of a - b?\n\n[Figure: Table x/f(x): (1,-64),(2,0),(3,64).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-64",
      "B": "62",
      "C": "128",
      "D": "192"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 243,
    "stem": "x + 40 = 95. What value of x is the solution to the given equation?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "55",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 244,
    "stem": "y - 9x = 13. 5x = 2y. What is the solution (x, y) to the given system of equations?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(5/2, 1)",
      "B": "(1, 2/5)",
      "C": "(-2, -5)",
      "D": "(-5, -2)"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 245,
    "stem": "y = 4x - 9. y = 19. What is the solution (x, y) to the given system of equations?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(4, 19)",
      "B": "(7, 19)",
      "C": "(19, 4)",
      "D": "(19, 7)"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 246,
    "stem": "Oil and gas production in a certain area dropped from 4 million barrels in 2000 to 1.9 million barrels in 2013. Assuming that the oil and gas production decreased at a constant rate, which of the following linear functions f best models the production, in millions of barrels, t years after the year 2000?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(t) = (21/130)t + 4",
      "B": "f(t) = (19/130)t + 4",
      "C": "f(t) = -(21/130)t + 4",
      "D": "f(t) = -(19/130)t + 4"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 247,
    "stem": "Some values of the linear function f are shown in the table above. What is the value of f(3)?\n\n[Figure: Table x/f(x): (0,-2),(2,4),(6,16).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "6",
      "B": "7",
      "C": "8",
      "D": "9"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 248,
    "stem": "y < x. x < 22. For which of the following tables are all the values of x and their corresponding values of y solutions to the given system of inequalities?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "x=19,20,21; y=18,19,20",
      "B": "x=19,20,21; y=20,21,22",
      "C": "x=23,24,25; y=22,23,24",
      "D": "x=23,24,25; y=24,25,26"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 249,
    "stem": "A line segment that has a length of 115 centimeters (cm) is divided into three parts. One part is 47 cm long. The other two parts have lengths that are equal to each other. What is the length, in cm, of one of the other two parts of equal length?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "34",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 250,
    "stem": "24x + y = 48. 6x + y = 72. The solution to the given system of equations is (x, y). What is the value of y?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "80",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 251,
    "stem": "If 2x = 12, what is the value of 9x?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "54",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 252,
    "stem": "In the xy-plane, the points (-2, 3) and (4, -5) lie on the graph of which of the following linear functions?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(x) = x + 5",
      "B": "f(x) = (1/2)x + 4",
      "C": "f(x) = -(4/3)x + 1/3",
      "D": "f(x) = -(3/2)x + 1"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 253,
    "stem": "The function f is defined by f(x) = (1/2)(x + 6). What is the value of f(4)?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "20",
      "B": "12",
      "C": "10",
      "D": "5"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 254,
    "stem": "y > 7x - 4. For which of the following tables are all the values of x and their corresponding values of y solutions to the given inequality?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "x=3,5,8; y=13,27,48",
      "B": "x=3,5,8; y=17,31,52",
      "C": "x=3,5,8; y=21,27,52",
      "D": "x=3,5,8; y=21,35,56"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 255,
    "stem": "A movie theater sells two types of tickets, adult tickets for $12 and child tickets for $8. If the theater sold 30 tickets for a total of $300, how much, in dollars, was spent on adult tickets? (Disregard the $ sign when gridding your answer.)",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "180",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 256,
    "stem": "The graph above shows the distance traveled d, in feet, by a product on a conveyor belt m minutes after the product is placed on the belt. Which of the following equations correctly relates d and m?\n\n[Figure: Line graph, x-axis 'm' 0-7, y-axis 'd' 0-7. Line through origin (0,0) and (2,4), continuing to ~(3.5,7).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "d = 2m",
      "B": "d = (1/2)m",
      "C": "d = m + 2",
      "D": "d = 2m + 2"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 257,
    "stem": "5(t + 3) - 7(t + 3) = 38. What value of t is the solution to the given equation?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "-22",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 258,
    "stem": "Lily made 36 cups of jam. Lily then filled x small containers and y large containers with all the jam she made. The equation 4x + 6y = 36 represents this situation. Which is the best interpretation of 6y in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The number of large containers Lily filled",
      "B": "The number of small containers Lily filled",
      "C": "The total number of cups of jam in the large containers",
      "D": "The total number of cups of jam in the small containers"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 259,
    "stem": "How many solutions does the equation 12(x - 3) = -3(x + 12) have?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Exactly one",
      "B": "Exactly two",
      "C": "Infinitely many",
      "D": "Zero"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 260,
    "stem": "The function g is defined by g(x) = 4x - 6. What is the value of g(-7)?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-34",
      "B": "-22",
      "C": "-13/4",
      "D": "-1/4"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 261,
    "stem": "A producer is creating a video with a length of 70 minutes. The video will consist of segments that are 1 minute long and segments that are 3 minutes long. Which equation represents this situation, where x represents the number of 1-minute segments and y represents the number of 3-minute segments?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "4xy = 70",
      "B": "4(x + y) = 70",
      "C": "3x + y = 70",
      "D": "x + 3y = 70"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 262,
    "stem": "c(x) = mx + 500. A company's total cost c(x), in dollars, to produce x shirts is given by the function above, where m is a constant and x > 0. The total cost to produce 100 shirts is $800. What is the total cost, in dollars, to produce 1000 shirts? (Disregard the $ sign when gridding your answer.)",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "3500",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 263,
    "stem": "For the linear function f, the graph of y = f(x) in the xy-plane has a slope of 39 and passes through the point (0,0). Which equation defines f?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(x) = -39x",
      "B": "f(x) = (1/39)x",
      "C": "f(x) = x - 39",
      "D": "f(x) = 39x"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 264,
    "stem": "A gardener buys two kinds of fertilizer. Fertilizer A contains 60% filler materials by weight and Fertilizer B contains 40% filler materials by weight. Together, the fertilizers bought by the gardener contain a total of 240 pounds of filler materials. Which equation models this relationship, where x is the number of pounds of Fertilizer A and y is the number of pounds of Fertilizer B?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "0.4x + 0.6y = 240",
      "B": "0.6x + 0.4y = 240",
      "C": "40x + 60y = 240",
      "D": "60x + 40y = 240"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 265,
    "stem": "One gallon of paint will cover 220 square feet of a surface. A room has a total wall area of w square feet. Which equation represents the total amount of paint P, in gallons, needed to paint the walls of the room twice?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "P = w/110",
      "B": "P = 440w",
      "C": "P = w/220",
      "D": "P = 220w"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 266,
    "stem": "The shaded region shown represents the solutions to which inequality?\n\n[Figure: xy-plane graph, both axes -8 to 8 gridlines 1 (labeled every 2). Dashed line through (0,-1) and (1,-4), slope -3. Shaded region above/right of boundary (y > -1 - 3x).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y < -1 + 3x",
      "B": "y < -1 - 3x",
      "C": "y > -1 + 3x",
      "D": "y > -1 - 3x"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 267,
    "stem": "A team hosting an event to raise money for new uniforms plans to sell at least 140 tickets before this event and at least 220 tickets during this event to raise a total of at least $5,820 from all tickets sold. The price of a ticket during this event is $3 less than the price of a ticket before this event. Which inequality represents this situation, where x is the price, in dollars, of a ticket sold during this event?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "140(x + 3) + 220x ≤ 5,820",
      "B": "140(x + 3) + 220x ≥ 5,820",
      "C": "140(x - 3) + 220x ≤ 5,820",
      "D": "140(x - 3) + 220x ≥ 5,820"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 268,
    "stem": "7x - 4y = -84. For the given equation, which table gives three values of x and their corresponding values of y?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "x:0,4,8; y:21,28,35",
      "B": "x:0,4,8; y:35,28,21",
      "C": "x:21,28,35; y:0,4,8",
      "D": "x:21,28,35; y:8,4,0"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 269,
    "stem": "y < 5x + 6. For which of the following tables are all the values of x and their corresponding values of y solutions to the given inequality?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "x:3,5,7; y:17,27,37",
      "B": "x:3,5,7; y:17,35,37",
      "C": "x:3,5,7; y:25,35,45",
      "D": "x:3,5,7; y:21,31,41"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 270,
    "stem": "A geologist needs to collect at least 67 samples of lava from a volcano. If the geologist has already collected 63 samples from the volcano, what is the minimum number of additional samples the geologist needs to collect?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "130",
      "B": "63",
      "C": "4",
      "D": "0"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 271,
    "stem": "For the function f, the graph of y = f(x) in the xy-plane has a slope of 3 and passes through the point (0, -8). Which equation defines f?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(x) = 3x",
      "B": "f(x) = 3x - 8",
      "C": "f(x) = 3x + 5",
      "D": "f(x) = 3x + 11"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 272,
    "stem": "A batch of banana milkshakes consists of 4 cups of ice cream and 2 bananas and has 1,114 milligrams (mg) of calcium. There is 276 mg of calcium in 1 cup of the ice cream used to make this batch of milkshakes. How much calcium, in mg, is in 1 banana?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "5",
      "B": "10",
      "C": "419",
      "D": "1,104"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 273,
    "stem": "In the xy-plane, a line has a slope of 6 and passes through the point (0, 8). Which of the following is an equation of this line?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = 6x + 8",
      "B": "y = 6x + 48",
      "C": "y = 8x + 6",
      "D": "y = 8x + 48"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 274,
    "stem": "The triangle inequality theorem states that the sum of any two sides of a triangle must be greater than the length of the third side. If a triangle has side lengths of 6 and 12, which inequality represents the possible lengths, x, of the third side of the triangle?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "x < 18",
      "B": "x > 18",
      "C": "6 < x < 18",
      "D": "x < 6 or x > 18"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 275,
    "stem": "y = 9x + 12\nx + 7y = 20\nThe solution to the given system of equations is (x, y). What is the value of y?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "3",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 276,
    "stem": "If 5(x + 4) = 4(x + 4) + 29, what is the value of x + 4?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-4",
      "B": "25",
      "C": "29",
      "D": "33"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 277,
    "stem": "An artist paints and sells square tiles. The selling price P, in dollars, of a painted tile is a linear function of the side length of the tile s, in inches, as shown in the table below. Which of the following could define the relationship between s and P?\n\n[Figure: Table with columns 'Side length, s (inches)' and 'Price, P (dollars)': rows (3, 8.00), (6, 18.00), (9, 28.00).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "P = 3s + 10",
      "B": "P = (10/3)s + 8",
      "C": "P = (10/3)s - 2",
      "D": "P = (3/10)s - 1/10"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 278,
    "stem": "The function f(x) = 55.20 - 0.16x gives the estimated surface water temperature f(x), in degrees Celsius, of a body of water on the xth day of the year, where 220 <= x <= 360. Based on the model, what is the estimated surface water temperature, in degrees Celsius, of this body of water on the 326th day of the year?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "55.20",
      "B": "3.04",
      "C": "-0.16",
      "D": "-52.16"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 279,
    "stem": "Cathy has n CDs. Gerry has 3 more than twice the number of CDs that Cathy has. In terms of n, how many CDs does Gerry have?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "3n - 2",
      "B": "3n + 2",
      "C": "2n - 3",
      "D": "2n + 3"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 280,
    "stem": "The equation 40x + 20y = 160 represents the number of sweaters, x, and number of shirts, y, that Yesenia purchased for $160. If Yesenia purchased 2 sweaters, how many shirts did she purchase?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "3",
      "B": "4",
      "C": "8",
      "D": "40"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 281,
    "stem": "Marisol drove 3 hours from City A to City B. The equation below estimates the distance d, in miles, Marisol traveled after driving for t hours.\nd = 45t\nWhich of the following does 45 represent in the equation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Marisol took 45 trips from City A to City B.",
      "B": "The distance between City A and City B is 45 miles.",
      "C": "Marisol drove at an average speed of about 45 miles per hour.",
      "D": "It took Marisol 45 hours to drive from City A to City B."
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 282,
    "stem": "If x = 7, what is the value of x + 20?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "13",
      "B": "20",
      "C": "27",
      "D": "34"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 283,
    "stem": "For the linear function f, f(0) = 17 and f(1) = 17. Which equation defines f?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(x) = 1/17",
      "B": "f(x) = 1",
      "C": "f(x) = 17",
      "D": "f(x) = 34"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 284,
    "stem": "A gym charges its members a onetime $36 enrollment fee and a membership fee of $19 per month. If there are no charges other than the enrollment fee and the membership fee, after how many months will a member have been charged a total of $188 at the gym?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "4",
      "B": "5",
      "C": "8",
      "D": "10"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 285,
    "stem": "If 7x = 28, what is the value of 8x?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "21",
      "B": "32",
      "C": "168",
      "D": "224"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 286,
    "stem": "x + 2y = 6\nx - 2y = 4\nThe solution to the given system of equations is (x, y). What is the value of x?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "5",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 287,
    "stem": "If 4x + 2 = 12, what is the value of 16x + 8?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "40",
      "B": "48",
      "C": "56",
      "D": "60"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 288,
    "stem": "A linear model estimates the population of a city from 1991 to 2015. The model estimates the population was 57 thousand in 1991, 224 thousand in 2011, and x thousand in 2015. To the nearest whole number, what is the value of x?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "257",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 289,
    "stem": "y > 4x + 8\nFor which of the following tables are all the values of x and their corresponding values of y solutions to the given inequality?\n\n[Figure: Four 2-column tables (x, y), each with rows for x = 2, 4, 6. A: (2,19),(4,30),(6,41). B: (2,8),(4,16),(6,24). C: (2,13),(4,18),(6,23). D: (2,13),(4,21),(6,29).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Table: x=2,y=19; x=4,y=30; x=6,y=41",
      "B": "Table: x=2,y=8; x=4,y=16; x=6,y=24",
      "C": "Table: x=2,y=13; x=4,y=18; x=6,y=23",
      "D": "Table: x=2,y=13; x=4,y=21; x=6,y=29"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 290,
    "stem": "The table shows three values of x and their corresponding values of y. There is a linear relationship between x and y. Which of the following equations represents this relationship?\n\n[Figure: Table with columns x and y: rows (0, 18), (1, 13), (2, 8).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = 18x + 13",
      "B": "y = 18x + 18",
      "C": "y = -5x + 13",
      "D": "y = -5x + 18"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 291,
    "stem": "6 + 7r = pw\n7r - 5w = 5w + 11\nIn the given system of equations, p is a constant. If the system has no solution, what is the value of p?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "10",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 292,
    "stem": "On the first day of a semester, a film club has 90 members. Each day after the first day of the semester, 10 new members join the film club. If no members leave the film club, how many total members will the film club have 4 days after the first day of the semester?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "400",
      "B": "130",
      "C": "94",
      "D": "90"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 293,
    "stem": "For what value of w does w - 10 = 2(w + 5)?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "5",
      "B": "0",
      "C": "-15",
      "D": "-20"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 294,
    "stem": "The shaded region shown represents solutions to an inequality. Which ordered pair (x, y) is a solution to this inequality?\n\n[Figure: xy-plane graph, x-axis and y-axis range roughly -8 to 8 with gridlines at every integer. A steep line passes through approximately (2, 8) at top and (3, -8) at bottom, crossing x-axis near x=2.5. Shaded region (gray) to the right of this line.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(0, -4)",
      "B": "(0, 4)",
      "C": "(-4, 0)",
      "D": "(4, 0)"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 295,
    "stem": "In the linear function f, f(0) = 8 and f(1) = 12. Which equation defines f?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(x) = 12x + 8",
      "B": "f(x) = 4x",
      "C": "f(x) = 4x + 12",
      "D": "f(x) = 4x + 8"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 296,
    "stem": "f(x) = 2x + 244\nThe given function f represents the perimeter, in centimeters (cm), of a rectangle with a length of x cm and a fixed width. What is the width, in cm, of the rectangle?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "2",
      "B": "122",
      "C": "244",
      "D": "488"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 297,
    "stem": "-15x + 25y = 65\nOne of the two equations in a system of linear equations is given. The system has infinitely many solutions. Which of the following could be the second equation in the system?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "12x + 20y = 52",
      "B": "12x + 20y = -52",
      "C": "-12x + 20y = 52",
      "D": "-12x + 20y = -52"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 298,
    "stem": "The function f is defined by f(x) = -9x + 9. What is the y-coordinate of the y-intercept of the graph of y = f(x) in the xy-plane?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "9",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 299,
    "stem": "Line l in the xy-plane is perpendicular to the line with equation x = 2. What is the slope of line l?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "0",
      "B": "-1/2",
      "C": "-2",
      "D": "The slope of line l is undefined."
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 300,
    "stem": "x = 5\ny = x - 8\nWhich of the following points (x, y) is the solution to the given system of equations in the xy-plane?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(0, 0)",
      "B": "(5, -3)",
      "C": "(5, -8)",
      "D": "(5, 8)"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 301,
    "stem": "w(t) = 300 - 4t\nThe function w models the volume of liquid, in milliliters, in a container t seconds after it begins draining from a hole at the bottom. According to the model, what is the predicted volume, in milliliters, draining from the container each second?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "300",
      "B": "296",
      "C": "75",
      "D": "4"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 302,
    "stem": "Line k is defined by y = 7x + 1/8. Line j is perpendicular to line k in the xy-plane. What is the slope of line j?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-8",
      "B": "-1/7",
      "C": "1/8",
      "D": "7"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 303,
    "stem": "16x + 30 = 190\nWhich equation has the same solution as the given equation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "16x = 30",
      "B": "16x = 130",
      "C": "16x = 160",
      "D": "16x = 190"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 304,
    "stem": "2(p + 1) + 8(p - 1) = 5p\nWhat value of p is the solution of the equation above?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "1.2",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 305,
    "stem": "If 6 + x = 9, what is the value of 18 + 3x?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "27",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 306,
    "stem": "y > 14\n4x + y < 18\nThe point (x, 53) is a solution to the system of inequalities in the xy-plane. Which of the following could be the value of x?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-9",
      "B": "-5",
      "C": "5",
      "D": "9"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 307,
    "stem": "The perimeter of an isosceles triangle is 36 feet. Each of the two congruent sides of the triangle has a length of 10 feet. What is the length, in feet, of the third side?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "10",
      "B": "12",
      "C": "16",
      "D": "18"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 308,
    "stem": "3x = 12\n-3x + y = -6\nThe solution to the given system of equations is (x, y). What is the value of y?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-3",
      "B": "6",
      "C": "18",
      "D": "30"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 309,
    "stem": "For the function f, f(cx) = x - 8 for all values of x, where c is a positive constant. If f(2) = 35, what is the value of c?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "2/43",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 310,
    "stem": "F(x) = 9/5(x - 273.15) + 32\nThe function F gives the temperature, in degrees Fahrenheit, that corresponds to a temperature of x kelvins. If a temperature increased by 2.10 kelvins, by how much did the temperature increase, in degrees Fahrenheit?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "3.78",
      "B": "35.78",
      "C": "487.89",
      "D": "519.89"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 311,
    "stem": "The function f defined by f(t) = 14t + 9 gives the estimated length, in inches, of a vine plant t months after Tavon purchased it. Which of the following is the best interpretation of 9 in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Tavon will keep the vine plant for 9 months.",
      "B": "The vine plant is expected to grow 9 inches each month.",
      "C": "The vine plant is expected to grow to a maximum length of 9 inches.",
      "D": "The estimated length of the vine plant was 9 inches when Tavon purchased it."
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 312,
    "stem": "In science class, Diego conducted an experiment to learn about evaporation. Diego measured the height of fluid in a beaker over a period of time. The function f(x) = 39 - 0.18x gives the estimated height, in centimeters (cm), of the fluid in the beaker x days after the start of the experiment. Which of the following is the best interpretation of 39 in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The estimated height, in cm, of the fluid at the start of the experiment",
      "B": "The estimated height, in cm, of the fluid at the end of the experiment",
      "C": "The estimated change in the height, in cm, of the fluid each day",
      "D": "The estimated number of days for all the fluid to evaporate"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 313,
    "stem": "s = 40 + 3t\nThe equation gives the speed s, in miles per hour, of a certain car t seconds after it began to accelerate. What is the speed, in miles per hour, of the car 5 seconds after it began to accelerate?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "40",
      "B": "43",
      "C": "45",
      "D": "55"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 314,
    "stem": "Each side of a 30-sided polygon has one of three lengths. The number of sides with length 8 centimeters (cm) is 5 times the number of sides n with length 3 cm. There are 6 sides with length 4 cm. Which equation must be true for the value of n?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "5n + 6 = 30",
      "B": "6n + 6 = 30",
      "C": "8n + 3n + 4n = 30",
      "D": "8(5n) + 3n + 4(6) = 30"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 315,
    "stem": "Connor has c dollars and Maria has m dollars. Connor has 4 times as many dollars as Maria, and together they have a total of $25.00. Which system of equations represents this situation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "c = 4m\nc + m = 25",
      "B": "m = 4c\nc + m = 25",
      "C": "c = 25m\nc + m = 4",
      "D": "m = 25c\nc + m = 4"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 316,
    "stem": "T = 1,000 + 18h. In the equation above, T represents Brittany's total take-home pay, in dollars, for her first week of work, where h represents the number of hours she worked that week and 1,000 represents a sign-on bonus. If Brittany's total take-home pay was $1,576, for how many hours was Brittany paid for her first week of work?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "16",
      "B": "32",
      "C": "55",
      "D": "88"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 317,
    "stem": "The function g is defined as g(x) = 5x + a, where a is a constant. If g(4) = 31, what is the value of a?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "30",
      "B": "22",
      "C": "11",
      "D": "-23"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 318,
    "stem": "j(x) = mx + 144. For the linear function j, m is a constant and j(12) = 18. What is the value of j(10)?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "39",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 319,
    "stem": "Tony spends $80 per month on public transportation. A 10-ride pass costs $12.50, and a single-ride pass costs $1.50. If g represents the number of 10-ride passes Tony buys in a month and t represents the number of single-ride passes Tony buys in a month, which of the following equations best represents the relationship between g and t?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "g + t = 80",
      "B": "g + t = 1.50 + 12.50",
      "C": "1.50g + 12.50t = 80",
      "D": "12.50g + 1.50t = 80"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 320,
    "stem": "If 4x = 3, what is the value of 24x?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "9/2",
      "B": "6",
      "C": "18",
      "D": "72"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 321,
    "stem": "In an article about exercise, it is estimated that a 160-pound adult uses 200 calories for every 30 minutes of hiking and 150 calories for every 30 minutes of bicycling. An adult who weighs 160 pounds has completed 1 hour of bicycling. Based on the article, how many hours should the adult hike to use a total of 1,900 calories from bicycling and hiking?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "9.5",
      "B": "8.75",
      "C": "6",
      "D": "4"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 322,
    "stem": "y = 3x + 9\n3y = 8x - 6\nThe solution to the given system of equations is (x, y). What is the value of x - y?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-123",
      "B": "-33",
      "C": "3",
      "D": "57"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 323,
    "stem": "In the linear function h, h(28) = 15 and h(26) = 22. Which equation defines h?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "h(x) = -2/7x + 23",
      "B": "h(x) = -2/7x + 113",
      "C": "h(x) = -7/2x + 23",
      "D": "h(x) = -7/2x + 113"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 324,
    "stem": "The table above gives the typical amounts of energy per gram, expressed in both food calories and kilojoules, of the three macronutrients in food. If x food calories is equivalent to k kilojoules, of the following, which best represents the relationship between x and k?\n\n[Figure: Table titled 'Energy per Gram of Typical Macronutrients' with columns Macronutrient, Food calories, Kilojoules. Rows: Protein 4.0/16.7, Fat 9.0/37.7, Carbohydrate 4.0/16.7.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "k = 0.24x",
      "B": "k = 4.2x",
      "C": "x = 4.2k",
      "D": "xk = 4.2"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 325,
    "stem": "x = 4\ny = 5 - x\nThe solution to the given system of equations is (x, y). What is the value of y?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "1",
      "B": "4",
      "C": "5",
      "D": "9"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 326,
    "stem": "y = 6x + 3\nOne of the two equations in a system of linear equations is given. The system has infinitely many solutions. Which equation could be the second equation in this system?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = 2(6x) + 3",
      "B": "y = 2(6x + 3)",
      "C": "2(y) = 2(6x) + 3",
      "D": "2(y) = 2(6x + 3)"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 327,
    "stem": "I = V/R\nThe formula above is Ohm's law for an electric circuit with current I, in amperes, potential difference V, in volts, and resistance R, in ohms. A circuit has a resistance of 500 ohms, and its potential difference will be generated by n six-volt batteries that produce a total potential difference of 6n volts. If the circuit is to have a current of no more than 0.25 ampere, what is the greatest number, n, of six-volt batteries that can be used?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "20",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 328,
    "stem": "13x = 112 - x\nWhat value of x is the solution to the given equation?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "8",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 329,
    "stem": "y < 6x + 2\nFor which of the following tables are all the values of x and their corresponding values of y solutions to the given inequality?\n\n[Figure: Four 2-column (x,y) tables. A: (3,20),(5,32),(7,44). B: (3,16),(5,36),(7,40). C: (3,16),(5,28),(7,40). D: (3,24),(5,36),(7,48).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Table: x=3,y=20; x=5,y=32; x=7,y=44",
      "B": "Table: x=3,y=16; x=5,y=36; x=7,y=40",
      "C": "Table: x=3,y=16; x=5,y=28; x=7,y=40",
      "D": "Table: x=3,y=24; x=5,y=36; x=7,y=48"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 330,
    "stem": "If 4x - 1/2 = -5, what is the value of 8x - 1?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "2",
      "B": "-9/8",
      "C": "-5/2",
      "D": "-10"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 331,
    "stem": "The table gives the number of hours, h, of labor and a plumber's total charge f(h), in dollars, for two different jobs. There is a linear relationship between h and f(h). Which equation represents this relationship?\n\n[Figure: Two-column table headers h and f(h): row1 h=1,f(h)=155; row2 h=3,f(h)=285.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(h) = 25h + 130",
      "B": "f(h) = 130h + 25",
      "C": "f(h) = 65h + 90",
      "D": "f(h) = 90h + 65"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 332,
    "stem": "For the linear function g, the graph of y = g(x) in the xy-plane has a slope of 2 and passes through the point (1, 14). Which equation defines g?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "g(x) = 2x",
      "B": "g(x) = 2x + 2",
      "C": "g(x) = 2x + 12",
      "D": "g(x) = 2x + 14"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 333,
    "stem": "The cost of renting a large canopy tent for up to 10 days is $430 for the first day and $215 for each additional day. Which of the following equations gives the cost y, in dollars, of renting the tent for x days, where x is a positive integer and x <= 10?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = 215x + 215",
      "B": "y = 430x - 215",
      "C": "y = 430x + 215",
      "D": "y = 215x + 430"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 334,
    "stem": "A museum rents tablets to visitors. The museum earns revenue of $14 for each tablet rented for the day. On Wednesday, the museum earned $406 in profit from renting tablets after paying daily expenses of $112. How many tablets did the museum rent on Wednesday? (profit = total revenue - total expenses)",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "37",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 335,
    "stem": "A wire with a length of 106 inches is cut into two parts. One part has a length of x inches, and the other part has a length of y inches. The value of x is 6 more than 4 times the value of y. What is the value of x?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "25",
      "B": "28",
      "C": "56",
      "D": "86"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 336,
    "stem": "y > 13x - 18\nFor which of the following tables are all the values of x and their corresponding values of y solutions to the given inequality?\n\n[Figure: Four 2-column (x,y) tables, x=3,5,8. A: (3,21),(5,47),(8,86). B: (3,26),(5,42),(8,86). C: (3,16),(5,42),(8,81). D: (3,26),(5,52),(8,91).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Table: x=3,y=21; x=5,y=47; x=8,y=86",
      "B": "Table: x=3,y=26; x=5,y=42; x=8,y=86",
      "C": "Table: x=3,y=16; x=5,y=42; x=8,y=81",
      "D": "Table: x=3,y=26; x=5,y=52; x=8,y=91"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 337,
    "stem": "For the linear function f, the graph of y = f(x) in the xy-plane has a slope of 7 and passes through the point (0, 5). Which equation defines f?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(x) = 5x",
      "B": "f(x) = 35x",
      "C": "f(x) = 7x + 5",
      "D": "f(x) = 12x + 5"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 338,
    "stem": "5x + 14y = 45\n10x + 7y = 27\nThe solution to the given system of equations is (x, y). What is the value of xy?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "1.8|9/5",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 339,
    "stem": "The sum of a number x and 7 is twice as large as a number y. The number y is 3 less than the number x. Which system of equations describes this situation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "x + 7 = 2y; y = x - 3",
      "B": "x + 7 = 2y; y = 3 - x",
      "C": "2(x + 7) = y; y = x - 3",
      "D": "2(x + 7) = y; y = 3 - x"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 340,
    "stem": "Normal body temperature for an adult is between 97.8°F and 99°F, inclusive. If Kevin, an adult male, has a body temperature that is considered to be normal, which of the following could be his body temperature?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "96.7°F",
      "B": "97.6°F",
      "C": "97.9°F",
      "D": "99.7°F"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 341,
    "stem": "A total of 2 squares each have side length r. A total of 6 equilateral triangles each have side length t. None of these squares and triangles shares a side. The sum of the perimeters of all these squares and triangles is 210. Which equation represents this situation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "6r + 24t = 210",
      "B": "2r + 6t = 210",
      "C": "8r + 18t = 210",
      "D": "6r + 2t = 210"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 342,
    "stem": "The graph of 9x - 10y = 19 is translated down 4 units in the xy-plane. What is the x-coordinate of the x-intercept of the resulting graph?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "59/9|6.555|6.556",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 343,
    "stem": "-3x + 21px = 84\nIn the given equation, p is a constant. The equation has no solution. What is the value of p?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "0",
      "B": "1/7",
      "C": "4/3",
      "D": "4"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 344,
    "stem": "Which of the following ordered pairs (x, y) satisfies the inequality 5x - 3y < 4?\nI. (1, 1)\nII. (2, 5)\nIII. (3, 2)",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "I only",
      "B": "II only",
      "C": "I and II only",
      "D": "I and III only"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 345,
    "stem": "6x + 7y = 28\n2x + 2y = 10\nThe solution to the given system of equations is (x, y). What is the value of y?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-2",
      "B": "7",
      "C": "14",
      "D": "18"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 346,
    "stem": "A particular botanist classifies a species of plant as tall if its typical height when fully grown is more than 100 centimeters. Each of the following inequalities represents the possible heights h, in centimeters, for a specific plant species when fully grown. Which inequality represents the possible heights h, in centimeters, for a tall plant species?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "106 < h < 158",
      "B": "80 < h < 100",
      "C": "42 < h < 87",
      "D": "17 < h < 85"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 347,
    "stem": "The equation 46 = 2x + 2y gives the perimeter of a rectangular rug that has length x, in feet, and width y, in feet. The width of the rug is 8 feet. What is the length, in feet, of the rug?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "15",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 348,
    "stem": "A bank account was opened with an initial deposit. Over the next several months, regular deposits were made into this account, and there were no withdrawals made during this time. The graph of the function f shown, where y = f(x), estimates the account balance, in dollars, in this bank account x months since the initial deposit. To the nearest whole dollar, what is the amount of the initial deposit estimated by the graph?\n\n[Figure: Line graph. X-axis 'Time since initial deposit (months)' 0-10, gridlines 2,4,6,8,10. Y-axis 'Bank account balance (dollars)' 0-80, gridlines every 10. Line from ~(0,20) to ~(10,40).]",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "20",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 349,
    "stem": "When line n is graphed in the xy-plane, it has an x-intercept of (-4, 0) and a y-intercept of (0, 86/3). What is the slope of line n?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "3/344",
      "B": "6/43",
      "C": "43/6",
      "D": "344/3"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 350,
    "stem": "A dance teacher ordered outfits for students for a dance recital. Outfits for boys cost $26, and outfits for girls cost $35. The dance teacher ordered a total of 28 outfits and spent $881. If b represents the number of outfits the dance teacher ordered for boys and g represents the number of outfits the dance teacher ordered for girls, which of the following systems of equations can be solved to find b and g?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "26b + 35g = 28\nb + g = 881",
      "B": "26b + 35g = 881\nb + g = 28",
      "C": "26g + 35b = 28\nb + g = 881",
      "D": "26g + 35b = 881\nb + g = 28"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 351,
    "stem": "3x + 6 = 4y\n3x + 4 = 2y\nThe solution to the given system of equations is (x, y). What is the value of y?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "1",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 352,
    "stem": "y = 2/7 x + 3\nOne of the two equations in a system of linear equations is given. The system has infinitely many solutions. If the second equation in the system is y = mx + b, where m and b are constants, what is the value of b?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-3",
      "B": "-1/3",
      "C": "1/3",
      "D": "3"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 353,
    "stem": "The function f is defined by f(x) = (x+15)/5, and f(a) = 10, where a is a constant. What is the value of a?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "5",
      "B": "10",
      "C": "35",
      "D": "65"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 354,
    "stem": "y = 1/2 x + 8\ny = cx + 10\nIn the system of equations above, c is a constant. If the system has no solution, what is the value of c?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "1/2",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 355,
    "stem": "If 2(3t-10) + t = 40 + 4t, what is the value of 3t?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "60",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 356,
    "stem": "If 6n = 12, what is the value of n + 4?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "6",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 357,
    "stem": "If (x+6)/3 = (x+6)/13, the value of x+6 is between which of the following pairs of values?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-7 and -3",
      "B": "-2 and 2",
      "C": "2 and 7",
      "D": "8 and 13"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 358,
    "stem": "A city employee will plant two types of bushes, azaleas and boxwoods, in a park. There will be no more than 164 total bushes planted, and the number of azaleas planted will be at most three times the number of boxwoods planted. Which of the following systems of inequalities best represents this situation, where a is the number of azaleas that will be planted, and b is the number of boxwoods that will be planted?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "a + b ≥ 164\n3a ≥ b",
      "B": "a + b ≥ 164\na ≤ 3b",
      "C": "a + b ≤ 164\n3a ≥ b",
      "D": "a + b ≤ 164\na ≤ 3b"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 359,
    "stem": "A clothing store is having a sale on shirts and pants. During the sale, the cost of each shirt is $15 and the cost of each pair of pants is $25. Geoff can spend at most $120 at the store. If Geoff buys s shirts and p pairs of pants, which of the following must be true?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "15s + 25p ≤ 120",
      "B": "15s + 25p ≥ 120",
      "C": "25s + 15p ≤ 120",
      "D": "25s + 15p ≥ 120"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 360,
    "stem": "If 2n/5 = 10, what is the value of 2n - 1?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "24",
      "B": "49",
      "C": "50",
      "D": "99"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 361,
    "stem": "In the xy-plane, line k passes through the points (0, -5) and (1, -1). Which equation defines line k?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = -x + 1/4",
      "B": "y = (1/4)x - 5",
      "C": "y = -x + 4",
      "D": "y = 4x - 5"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 362,
    "stem": "The table above shows the coordinates of three points on a line in the xy-plane, where k and n are constants. If the slope of the line is 2, what is the value of k + n?\n\n[Figure: Table with columns x,y rows: (3,7),(k,11),(12,n).]",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "30",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 363,
    "stem": "The graph of a system of linear equations is shown. What is the solution (x, y) to the system?\n\n[Figure: xy-plane grid, x-axis -4 to 10, y-axis -4 to 10 (gridlines every 2). Shallow decreasing line from (-4,7) through (0,5) to (10,0). Steep increasing line from (-0.5,-4) up through origin area to (2.5,10). Lines intersect at (2,4).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(0, 5)",
      "B": "(2, 4)",
      "C": "(5, 10)",
      "D": "(10, 0)"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 364,
    "stem": "(7/2)x + 6y = 25\n(5/2)x + 6y = 23\nThe solution to the given system of equations is (x, y). What is the value of (17/2)x + 18y?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "2",
      "B": "3",
      "C": "48",
      "D": "71"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 365,
    "stem": "2.6 + x = 2.8\nWhat value of x is the solution to the given equation?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "0.2",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 366,
    "stem": "The function f is defined by f(x) = 9(2x + 3). For what value of x does f(x) = 63?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "2",
      "B": "5",
      "C": "7",
      "D": "30"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 367,
    "stem": "The function f is defined by the equation f(x) = 100x + 2. What is the value of f(x) when x = 9?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "111",
      "B": "118",
      "C": "900",
      "D": "902"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 368,
    "stem": "A line in the xy-plane has a slope of 1/9 and passes through the point (0, 14). Which equation represents this line?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = -1/9x - 14",
      "B": "y = -1/9x + 14",
      "C": "y = 1/9x - 14",
      "D": "y = 1/9x + 14"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 369,
    "stem": "s + 7r = 27\nr = 3\nWhat is the solution (r, s) to the given system of equations?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(6, 3)",
      "B": "(3, 6)",
      "C": "(3, 27)",
      "D": "(27, 3)"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 370,
    "stem": "If f(x) = x + 6 and g(x) = 6x, what is the value of 7f(2) - g(2)?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-4",
      "B": "8",
      "C": "42",
      "D": "44"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 371,
    "stem": "Vivian bought party hats and cupcakes for $71. Each package of party hats cost $3, and each cupcake cost $1. If Vivian bought 10 packages of party hats, how many cupcakes did she buy?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "41",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 372,
    "stem": "The graph shows the linear relationship between x and y. Which table gives three values of x and their corresponding values of y for this relationship?\n\n[Figure: xy-plane, x-axis -8 to 8, y-axis -6 to 10 (gridlines every 2). Increasing line through points (0,-5),(1,-3),(2,-1) (marked), extending ~(1.7,-4.3) to ~(7,11).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "table: x=0,y=0; x=1,y=-7; x=2,y=-9",
      "B": "table: x=0,y=0; x=1,y=-3; x=2,y=-1",
      "C": "table: x=0,y=-5; x=1,y=-7; x=2,y=-9",
      "D": "table: x=0,y=-5; x=1,y=-3; x=2,y=-1"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 373,
    "stem": "Line k is shown in the xy-plane. Line j (not shown) is perpendicular to line k. What is the slope of line j?\n\n[Figure: xy-plane, x-axis -10 to 1, y-axis -10 to 1. Line k decreasing, passes through (-6,0) and (0,-5), drawn ~(-7,1) to (0,-6).]",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "6/5",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 374,
    "stem": "The length of a rectangle is 50 inches and the width is x inches. The perimeter is at most 210 inches. Which inequality represents this situation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "2x + 100 <= 210",
      "B": "2x + 100 >= 210",
      "C": "2x + 50 <= 210",
      "D": "2x + 50 >= 210"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 375,
    "stem": "A shipping service restricts the dimensions of the boxes it will ship for a certain type of service. The restriction states that for boxes shaped like rectangular prisms, the sum of the perimeter of the base of the box and the height of the box cannot exceed 130 inches. The perimeter of the base is determined using the width and length of the box. If a box has a height of 60 inches and its length is 2.5 times the width, which inequality shows the allowable width x, in inches, of the box?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "0 < x <= 10",
      "B": "0 < x <= 11 2/3",
      "C": "0 < x <= 17 1/2",
      "D": "0 < x <= 20"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 376,
    "stem": "Line h is defined by (1/5)x + (1/7)y - 70 = 0. Line j is perpendicular to line h in the xy-plane. What is the slope of line j?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-7/5",
      "B": "-5/7",
      "C": "7/5",
      "D": "5/7"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 377,
    "stem": "The cost to rent a commercial fishing boat from a certain company is $950 for the first 2 hours and an additional $50 per hour for each hour after the first 2 hours. If the total cost to rent the commercial fishing boat from the company for t hours, where t > 2, is $1,100, which equation represents this situation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "950(t - 2) + 50t = 1,100",
      "B": "950(2t) + 50t = 1,100",
      "C": "950 + 50(t - 2) = 1,100",
      "D": "950 + 50(2t) = 1,100"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 378,
    "stem": "The table above shows some pairs of x values and y values. Which of the following equations could represent the relationship between x and y?\n\n[Figure: Table columns x,y rows: (1,5),(2,7),(3,9),(4,11).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = 2x + 3",
      "B": "y = 3x - 2",
      "C": "y = 4x - 1",
      "D": "y = 5x"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 379,
    "stem": "x = 8\nx + 3y = 26\nThe solution to the given system of equations is (x, y). What is the value of y?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "6",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 380,
    "stem": "If f(x) = x + 7 and g(x) = 7x, what is the value of 4f(2) - g(2)?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-5",
      "B": "1",
      "C": "22",
      "D": "28"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 381,
    "stem": "x + y = 20\n2(x + y) + 3y = 85\nIf (x, y) is the solution to the given system of equations, what is the value of y?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "10",
      "B": "15",
      "C": "60",
      "D": "65"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 382,
    "stem": "y = 2x + 1\ny = ax - 8\nIn the system of equations above, a is a constant. If the system of equations has no solution, what is the value of a?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-1/2",
      "B": "0",
      "C": "1",
      "D": "2"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 383,
    "stem": "8x + 7y = 9\n24x + 21y = 27\nFor each real number r, which of the following points lies on the graph of each equation in the xy-plane for the given system?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(r, -8r/7 + 9/7)",
      "B": "(-8r/7 + 9/7, r)",
      "C": "(-8r/7 + 9, 8r/7 + 27)",
      "D": "(r/3 + 9, -r/3 + 27)"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 384,
    "stem": "y < 6x + 2\nFor which of the following tables are all the values of x and their corresponding values of y solutions to the given inequality?\n\n[Figure: Four 2-column (x,y) tables. A:(3,20),(5,32),(7,44). B:(3,16),(5,36),(7,40). C:(3,16),(5,28),(7,40). D:(3,24),(5,36),(7,48).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Table: x=3,y=20; x=5,y=32; x=7,y=44",
      "B": "Table: x=3,y=16; x=5,y=36; x=7,y=40",
      "C": "Table: x=3,y=16; x=5,y=28; x=7,y=40",
      "D": "Table: x=3,y=24; x=5,y=36; x=7,y=48"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 385,
    "stem": "The cost to rent a bus from Company X is $950 for the first 3 hours and an additional $50 per hour for each hour after the first 3 hours. If the total cost to rent the bus from Company X for t hours, where t > 3, is $1,150, which equation represents this situation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "950(t - 3) + 50t = 1,150",
      "B": "950(3t) + 50t = 1,150",
      "C": "950 + 50(t - 3) = 1,150",
      "D": "950 + 50(3t) = 1,150"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 386,
    "stem": "5x + 7y = 1\nax + by = 1\nIn the given pair of equations, a and b are constants. The graph of this pair of equations in the xy-plane is a pair of perpendicular lines. Which of the following pairs of equations also represents a pair of perpendicular lines?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "10x + 7y = 1; ax - 2by = 1",
      "B": "10x + 7y = 1; ax + 2by = 1",
      "C": "10x + 7y = 1; 2ax + by = 1",
      "D": "5x - 7y = 1; ax + by = 1"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 387,
    "stem": "On January 1, 2015, a city's minimum hourly wage was $9.25. It will increase by $0.50 on the first day of the year for the next 5 years. Which of the following functions best models the minimum hourly wage, in dollars, x years after January 1, 2015, where x = 1, 2, 3, 4, 5?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(x) = 9.25 - 0.50x",
      "B": "f(x) = 9.25x - 0.50",
      "C": "f(x) = 9.25 + 0.50x",
      "D": "f(x) = 9.25x + 0.50"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 388,
    "stem": "If 6/7p + 18 = 54, what is the value of 7p?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "294",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 389,
    "stem": "A business owner plans to purchase the same model of chair for each of the 81 employees. The total budget to spend on these chairs is $14,000, which includes a 7% sales tax. Which of the following is closest to the maximum possible price per chair, before sales tax, the business owner could pay based on this budget?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "$148.15",
      "B": "$161.53",
      "C": "$172.84",
      "D": "$184.94"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 390,
    "stem": "What value of x is the solution to the equation 16x + 24 = 24x?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-4",
      "B": "3/10",
      "C": "1/3",
      "D": "3"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 391,
    "stem": "y = -3x\n4x + y = 15\nThe solution to the given system of equations is (x, y). What is the value of x?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "1",
      "B": "5",
      "C": "15",
      "D": "45"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 392,
    "stem": "For a particular car, the linear function f gives the predicted power, in brake horsepower (bhp), for engine speeds between 1,000 revolutions per minute (rpm) and 6,000 rpm. According to this function, the car's predicted power is 433 bhp at an engine speed of 3,331 rpm and 600 bhp at an engine speed of 4,500 rpm. The equation f(x) = 1/7(x - a) + 433 defines f, where x is the engine speed, in rpm, and a is a constant. What is the value of a?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "3331",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 393,
    "stem": "5G + 45R = 380\nAt a school fair, students can win colored tokens that are worth a different number of points depending on the color. One student won G green tokens and R red tokens worth a total of 380 points. The given equation represents this situation. How many more points is a red token worth than a green token?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "40",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 394,
    "stem": "In a set of four consecutive odd integers, where the integers are ordered from least to greatest, the first integer is represented by x. The product of 12 and the fourth odd integer is at most 26 less than the sum of the first and third odd integers. Which inequality represents this situation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "12(x + 6) <= x + (x + 4) - 26",
      "B": "12(x + 6) >= 26 - (x + (x + 4))",
      "C": "12(x + 4) <= x + (x + 3) - 26",
      "D": "12(x + 4) >= 26 - (x + (x + 3))"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 395,
    "stem": "A student council group is selling school posters for a fundraiser. They use the function p(x) = 5x - 220 to determine their profit p(x), in dollars, for selling x school posters. In order to earn a profit of $900, how many school posters must they sell?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "224",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 396,
    "stem": "4x - 3y = 5\nx = 8\nWhat is the solution (x, y) to the given system of equations?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(8, 9)",
      "B": "(8, -24)",
      "C": "(8, -9)",
      "D": "(8, 24)"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 397,
    "stem": "The length, y, of a white whale was 162 centimeters (cm) when it was born and increased an average of 4.8 cm per month for the first 12 months after it was born. Which equation best represents this situation, where x is the number of months after the whale was born and y is the length, in cm, of the whale?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = 162x",
      "B": "y = 162x + 162",
      "C": "y = 4.8x + 4.8",
      "D": "y = 4.8x + 162"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 398,
    "stem": "The shaded region shown represents the solutions to which inequality?\n\n[Figure: xy-plane, x-axis -4 to 10, y-axis -10 to 5. Solid boundary line slope 2/3 through (0,-6) and (9,0). Shaded region above/on boundary.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y >= (2/3)x - 6",
      "B": "y >= (2/3)x + 6",
      "C": "y >= (2/3)x - 9",
      "D": "y >= (2/3)x + 9"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 399,
    "stem": "2x + 9y = 7. The given equation is one equation in a system of two linear equations. If the system of equations has at least one solution, which of the following could be the other equation in the system? I. 3x + 13.5y = 10.5  II. 3x - 13.5y = 10.5",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "I only",
      "B": "II only",
      "C": "I and II",
      "D": "Neither I nor II"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 400,
    "stem": "Which system of linear equations has no solution?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-2x + 3y = -9 and 2x - 3y = 9",
      "B": "2x - 3y = 9 and 3x + 4y = 10",
      "C": "2x - 3y = 9 and -6x + 9y = -27",
      "D": "-2x + 3y = 9 and 4x - 6y = 18"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 401,
    "stem": "Store A sells raspberries for $5.50 per pint and blackberries for $3.00 per pint. Store B sells raspberries for $6.50 per pint and blackberries for $8.00 per pint. A certain purchase of raspberries and blackberries would cost $37.00 at Store A or $66.00 at Store B. How many pints of blackberries are in this purchase?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "4",
      "B": "5",
      "C": "8",
      "D": "12"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 402,
    "stem": "Line r is defined by the equation 4x - 9y = 3. Line s is parallel to line r in the xy-plane. What is the slope of line s?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "9/4",
      "B": "4/9",
      "C": "-4",
      "D": "-9"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 403,
    "stem": "The equation x + y = 1,440 represents the number of minutes of daylight (between sunrise and sunset), x, and the number of minutes of non-daylight, y, on a particular day in Oak Park, Illinois. If this day has 670 minutes of daylight, how many minutes of non-daylight does it have?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "670",
      "B": "770",
      "C": "1,373",
      "D": "1,440"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 404,
    "stem": "The table above shows some values of x and their corresponding values f(x) for the linear function f. What is the x-intercept of the graph of y = f(x) in the xy-plane?\n\n[Figure: Table header row x: -11,-10,-9,-8; f(x): 21,18,15,12.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(-3,0)",
      "B": "(-4,0)",
      "C": "(-9,0)",
      "D": "(-12,0)"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 405,
    "stem": "If (1/2)x - (1/6)x = 1, what is the value of x?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-4",
      "B": "1/3",
      "C": "3",
      "D": "6"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 406,
    "stem": "What is the slope of the graph of y = (5x/13) - 23 in the xy-plane?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "5/13",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 407,
    "stem": "Which of the following systems of linear equations has no solution?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = 6x + 3 and y = 6x + 9",
      "B": "y = 10 and y = 10x + 10",
      "C": "y = 14x + 14 and y = 10x + 14",
      "D": "x = 3 and y = 10"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 408,
    "stem": "For the linear function g, the table shows four values of x and their corresponding values of g(x). The function can be written as g(x) = mx + b, where m and b are constants. What is the value of b?\n\n[Figure: Table columns x,g(x): (1,54),(2,51),(3,48),(4,45).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "3",
      "B": "27",
      "C": "54",
      "D": "57"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 409,
    "stem": "The function f is defined by f(x) = (1/10)x - 2. What is the y-intercept of the graph of y = f(x) in the xy-plane?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(-2,0)",
      "B": "(0,-2)",
      "C": "(0,1/10)",
      "D": "(1/10,0)"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 410,
    "stem": "g(m) = -0.05m + 12.1. The given function g models the number of gallons of gasoline that remains from a full gas tank in a car after driving m miles. According to the model, about how many gallons of gasoline are used to drive each mile?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "0.05",
      "B": "12.1",
      "C": "20",
      "D": "242.0"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 411,
    "stem": "11x + 14y <= 115. Anthony will spend at most $115 to purchase x small cheese pizzas and y large cheese pizzas for a team dinner. The given inequality represents this situation. Which of the following is the best interpretation of 14y in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The amount, in dollars, Anthony will spend on each large cheese pizza",
      "B": "The amount, in dollars, Anthony will spend on each small cheese pizza",
      "C": "The total amount, in dollars, Anthony will spend on large cheese pizzas",
      "D": "The total amount, in dollars, Anthony will spend on small cheese pizzas"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 412,
    "stem": "Which of the following systems of linear equations has no solution?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "x = 3 and y = 5",
      "B": "y = 6x + 6 and y = 5x + 6",
      "C": "y = 16x + 3 and y = 16x + 19",
      "D": "y = 5 and y = 5x + 5"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 413,
    "stem": "Line k is defined by y = 6x + 4. Line j is parallel to line k in the xy-plane and passes through the point (0,5). Which equation defines line j?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = 6x + 5",
      "B": "y = -5x + 5",
      "C": "y = -6x + 5",
      "D": "y = 5x + 5"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 414,
    "stem": "Line k is defined by y = (1/4)x + 1. Line j is parallel to line k in the xy-plane. What is the slope of j?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "1/4",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 415,
    "stem": "3x + 5(x + 4) = 76\nWhat value of x is the solution to the given equation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "7",
      "B": "8",
      "C": "56",
      "D": "72"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 416,
    "stem": "The combined original price for a mirror and a vase is $60. After a 25% discount to the mirror and a 45% discount to the vase are applied, the combined sale price for the two items is $39. Which system of equations gives the original price m, in dollars, of the mirror and the original price v, in dollars, of the vase?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "m + v = 60\n0.55m + 0.75v = 39",
      "B": "m + v = 60\n0.45m + 0.25v = 39",
      "C": "m + v = 60\n0.75m + 0.55v = 39",
      "D": "m + v = 60\n0.25m + 0.45v = 39"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 417,
    "stem": "The graph shown models the number of candy bars a certain machine wraps with a label in x seconds. According to the graph, what is the estimated number of candy bars the machine wraps with a label per second?\n\n[Figure: Line graph. X-axis 'Time (seconds)' 0-10, gridlines 2,4,6,8,10. Y-axis 'Number of candy bars wrapped' 0-240+, gridlines every 20. Line from origin (0,0) through (2,80), continuing to ~(6.5,260).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "2",
      "B": "40",
      "C": "78",
      "D": "80"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 418,
    "stem": "h(x) = x + b\nFor the linear function h, b is a constant and h(0) = 45. What is the value of b?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "45",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 419,
    "stem": "4x + 5y = 100\n5x + 4y = 62\nIf the system of equations above has solution (x, y), what is the value of x + y?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "0",
      "B": "9",
      "C": "18",
      "D": "38"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 420,
    "stem": "2a + 8b = 198\n2a + 4b = 98\nThe solution to the given system of equations is (a, b). What is the value of b?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "25",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 421,
    "stem": "The graph of the function f is shown, where y = f(x). What is the y-intercept of the graph?\n\n[Figure: xy-plane, origin O marked. X-axis labels 2,4; y-axis labels -2,-4,-6,-8. Steep positive-slope line crosses y-axis at (0,-4), extends toward (-1,-8) and rises through upper-right past x=2.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(0, -1)",
      "B": "(0, -4)",
      "C": "(0, 1)",
      "D": "(0, 4)"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 422,
    "stem": "The table shows three values of x and their corresponding values of y. Which equation represents the linear relationship between x and y?\n\n[Figure: Table x=1,2,3; y=11,16,21.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = 5x + 6",
      "B": "y = 5x + 11",
      "C": "y = 6x + 5",
      "D": "y = 6x + 11"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 423,
    "stem": "The table shows four values of x and their corresponding values of y. There is a linear relationship between x and y. Which of the following equations represents this relationship?\n\n[Figure: Table x=-6,-3,3,6; y=65,56,38,29.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "9x + 3y = 141",
      "B": "9x + 3y = 3",
      "C": "3x + 9y = 141",
      "D": "3x + 9y = 3"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 424,
    "stem": "A number x is at most 2 less than 3 times the value of y. If the value of y is -4, what is the greatest possible value of x?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "-14",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 425,
    "stem": "Caleb used juice to make popsicles. The function f(x) = -5x + 30 approximates the volume, in fluid ounces, of juice Caleb had remaining after making x popsicles. Which statement is the best interpretation of the y-intercept of the graph of y = f(x) in the xy-plane in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Caleb used approximately 5 fluid ounces of juice for each popsicle.",
      "B": "Caleb had approximately 5 fluid ounces of juice when he began to make the popsicles.",
      "C": "Caleb had approximately 30 fluid ounces of juice when he began to make the popsicles.",
      "D": "Caleb used approximately 30 fluid ounces of juice for each popsicle."
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 426,
    "stem": "At a state fair, attendees can win tokens that are worth a different number of points depending on the shape. One attendee won S square tokens and C circle tokens worth a total of 1,120 points. The equation 80S + 90C = 1,120 represents this situation. How many more points is a circle token worth than a square token?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "950",
      "B": "90",
      "C": "80",
      "D": "10"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 427,
    "stem": "According to data provided by the US Department of Energy, the average price per gallon of regular gasoline in the United States from September 1, 2014, to December 1, 2014, is modeled by the function F defined below, where F(x) is the average price per gallon x months after September 1.\nF(x) = 2.74 - 0.19(x - 3)\nThe constant 2.74 in this function estimates which of the following?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The average monthly decrease in the price per gallon",
      "B": "The difference in the average price per gallon from September 1, 2014, to December 1, 2014",
      "C": "The average price per gallon on September 1, 2014",
      "D": "The average price per gallon on December 1, 2014"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 428,
    "stem": "In the xy-plane, the graph of y = x + 3 intersects the graph of y = 2x - 6 at the point (a, b). What is the value of a?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "3",
      "B": "6",
      "C": "9",
      "D": "12"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 429,
    "stem": "In the xy-plane, the graph of the linear function f contains the points (0, 2) and (8, 34). Which equation defines f, where y = f(x)?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(x) = 2x + 42",
      "B": "f(x) = 32x + 36",
      "C": "f(x) = 4x + 2",
      "D": "f(x) = 8x + 2"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 430,
    "stem": "The table shows the linear relationship between the number of cars, c, on a commuter train and the maximum number of passengers and crew, p, that the train can carry. Which equation represents the linear relationship between c and p?\n\n[Figure: Table 'Number of cars'/'Max passengers and crew': (3,174),(5,284),(10,559).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "55c - p = -9",
      "B": "55c - p = 9",
      "C": "55p - c = -9",
      "D": "55p - c = 9"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 431,
    "stem": "The y-intercept of the graph of 12x + 2y = 18 in the xy-plane is (0, y). What is the value of y?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "9",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 432,
    "stem": "Ken is working this summer as part of a crew on a farm. He earned $8 per hour for the first 10 hours he worked this week. Because of his performance, his crew leader raised his salary to $10 per hour for the rest of the week. Ken saves 90% of his earnings from each week. What is the least number of hours he must work the rest of the week to save at least $270 for the week?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "38",
      "B": "33",
      "C": "22",
      "D": "16"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 433,
    "stem": "The graph of a system of linear equations is shown. The solution to the system is (x, y). What is the value of x?\n\n[Figure: xy-plane x-axis -1 to 9, y-axis -2 to 5. Two lines intersect at (4,1).]",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "4",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 434,
    "stem": "y > 2x - 1\n2x > 5\nWhich of the following consists of the y-coordinates of all the points that satisfy the system of inequalities above?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y > 6",
      "B": "y > 4",
      "C": "y > 5/2",
      "D": "y > 3/2"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 435,
    "stem": "For the linear function g, the table shows four values of x and their corresponding values of g(x). The function can be written as g(x) = mx + b, where m and b are constants. What is the value of b?\n\n[Figure: Table x=1,2,3,4; g(x)=32,28,24,20.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "4",
      "B": "16",
      "C": "32",
      "D": "36"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 436,
    "stem": "Kaylani used fabric measuring 5 yards in length to make each suit for a men's choir. The relationship between the number of suits that Kaylani made, x, and the total length of fabric that she purchased, y, in yards, is represented by the equation y - 5x = 6. What is the best interpretation of 6 in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Kaylani made 6 suits.",
      "B": "Kaylani purchased a total of 6 yards of fabric.",
      "C": "Kaylani used a total of 6 yards of fabric to make the suits.",
      "D": "Kaylani purchased 6 yards more fabric than she used to make the suits."
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 437,
    "stem": "For a camping trip a group bought x one-liter bottles of water and y three-liter bottles of water, for a total of 240 liters of water. Which equation represents this situation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "x + 3y = 240",
      "B": "x + y = 240",
      "C": "3x + 3y = 240",
      "D": "3x + y = 240"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 438,
    "stem": "To earn money for college, Avery works two part-time jobs: A and B. She earns $10 per hour working at job A and $20 per hour working at job B. In one week, Avery earned a total of s dollars for working at the two part-time jobs. The graph above represents all possible combinations of numbers of hours Avery could have worked at the two jobs to earn s dollars. What is the value of s?\n\n[Figure: Line graph, x-axis 'Number of hours at job A' 0-20, y-axis 'Number of hours at job B' 0-10. Line from (0,8) to (16,0).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "128",
      "B": "160",
      "C": "200",
      "D": "320"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 439,
    "stem": "-x - wy = -337\n2x - wy = 47\nIn the given system of equations, w is a constant. In the xy-plane, the graphs of these equations intersect at the point (q, 19), where q is a constant. What is the value of w?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "11",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 440,
    "stem": "For a 3-week period in a town in Illinois, the lowest recorded temperature was 31 degrees Fahrenheit (°F) and the highest recorded temperature was 67°F. Which inequality is true for any recorded temperature t, in °F, in this town for this 3-week period?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "t >= 98",
      "B": "t >= 67",
      "C": "31 <= t <= 67",
      "D": "t <= 31"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 441,
    "stem": "If 2 + x = 60, what is the value of 16 + 8x?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "480",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 442,
    "stem": "y = 18 - 5x\nThe equation above represents the speed y, in feet per second, of Sheila's bicycle x seconds after she applied the brakes at the end of a ride. If the equation is graphed in the xy-plane, which of the following is the best interpretation of the x-coordinate of the line's x-intercept in the context of the problem?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The speed of Sheila's bicycle, in feet per second, before Sheila applied the brakes",
      "B": "The number of feet per second the speed of Sheila's bicycle decreased each second after Sheila applied the brakes",
      "C": "The number of seconds it took from the time Sheila began applying the brakes until the bicycle came to a complete stop",
      "D": "The number of feet Sheila's bicycle traveled from the time she began applying the brakes until the bicycle came to a complete stop"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 443,
    "stem": "To repair a refrigerator, a technician charges $60 per hour for labor plus $120 for parts. Which function f represents the total amount, in dollars, the technician will charge for this job if it takes x hours?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(x) = x + 120",
      "B": "f(x) = 60x",
      "C": "f(x) = 60x + 120",
      "D": "f(x) = 60x - 120"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 444,
    "stem": "A teacher is creating an assignment worth 70 points. The assignment will consist of questions worth 1 point and questions worth 3 points. Which equation represents this situation, where x represents the number of 1-point questions and y represents the number of 3-point questions?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "4xy = 70",
      "B": "4(x + y) = 70",
      "C": "3x + y = 70",
      "D": "x + 3y = 70"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 445,
    "stem": "Figure A and figure B are both regular polygons. The sum of the perimeter of figure A and the perimeter of figure B is 63 inches. The equation 3x + 6y = 63 represents this situation, where x is the number of sides of figure A and y is the number of sides of figure B. Which statement is the best interpretation of 6 in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Each side of figure B has a length of 6 inches.",
      "B": "The number of sides of figure B is 6.",
      "C": "Each side of figure A has a length of 6 inches.",
      "D": "The number of sides of figure A is 6."
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 446,
    "stem": "y = 2x - 3\n3y = 5x\nIn the solution to the system of equations above, what is the value of y?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-15",
      "B": "-9",
      "C": "9",
      "D": "15"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 447,
    "stem": "An elementary school teacher is ordering x workbooks and y sets of flash cards for a math class. The teacher must order at least 20 items, but the total cost of the order must not be over $80. If the workbooks cost $3 each and the flash cards cost $4 per set, which of the following systems of inequalities models this situation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "x + y >= 20; 3x + 4y <= 80",
      "B": "x + y >= 20; 3x + 4y >= 80",
      "C": "3x + 4y <= 20; x + y >= 80",
      "D": "x + y <= 20; 3x + 4y >= 80"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 448,
    "stem": "(7/8)y - (5/8)x = 4/7 - (7/8)y\n(5/4)x + 7/4 = py + 15/4\nIn the given system of equations, p is a constant. If the system has no solution, what is the value of p?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "3.5|7/2",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 449,
    "stem": "A shipment consists of 5-pound boxes and 10-pound boxes with a total weight of 220 pounds. There are 13 10-pound boxes in the shipment. How many 5-pound boxes are in the shipment?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "5",
      "B": "10",
      "C": "13",
      "D": "18"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 450,
    "stem": "4x - 9y = 9y + 5\nhy = 2 + 4x\nIn the given system of equations, h is a constant. If the system has no solution, what is the value of h?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-9",
      "B": "0",
      "C": "9",
      "D": "18"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 451,
    "stem": "A geologist estimates that the volume of a slab of granite is greater than 12.7 cubic feet but less than 15.7 cubic feet. The geologist also estimates that the slab of granite weighs 165 pounds per cubic foot of volume. Which inequality represents this situation, where x represents the estimated total weight, in pounds, of the slab of granite?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "165 - 15.7 < x < 165 - 12.7",
      "B": "165 + 12.7 < x < 165 + 15.7",
      "C": "165(12.7) < x < 165(15.7)",
      "D": "165/15.7 < x < 165/12.7"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 452,
    "stem": "In the linear function h, h(0) = 41 and h(1) = 40. Which equation defines h?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "h(x) = -x + 41",
      "B": "h(x) = -x",
      "C": "h(x) = -41x",
      "D": "h(x) = -41"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 453,
    "stem": "2.5b + 5r = 80\nThe given equation describes the relationship between the number of birds, b, and the number of reptiles, r, that can be cared for at a pet care business on a given day. If the business cares for 16 reptiles on a given day, how many birds can it care for on this day?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "0",
      "B": "5",
      "C": "40",
      "D": "80"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 454,
    "stem": "Hana deposited a fixed amount into her bank account each month. The function f(t) = 100 + 25t gives the amount, in dollars, in Hana's bank account after t monthly deposits. What is the best interpretation of 25 in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "With each monthly deposit, the amount in Hana's bank account increased by $25.",
      "B": "Before Hana made any monthly deposits, the amount in her bank account was $25.",
      "C": "After 1 monthly deposit, the amount in Hana's bank account was $25.",
      "D": "Hana made a total of 25 monthly deposits."
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 455,
    "stem": "The graph of a system of two linear equations is shown. What is the solution (x, y) to the system?\n\n[Figure: xy-plane -10 to 10 both axes. Two lines intersect at (2,2).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(0, 4)",
      "B": "(2, 2)",
      "C": "(4, 0)",
      "D": "(4, 4)"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 456,
    "stem": "-49x = -98x\nHow many solutions does the given equation have?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Zero",
      "B": "Exactly one",
      "C": "Exactly two",
      "D": "Infinitely many"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 457,
    "stem": "An event planner is planning a party. It costs the event planner a onetime fee of $35 to rent the venue and $10.25 per attendee. The event planner has a budget of $200. What is the greatest number of attendees possible without exceeding the budget?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "16",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 458,
    "stem": "Megan's regular wage at her job is p dollars per hour for the first 8 hours of work in a day plus 1.5 times her regular hourly wage for work in excess of 8 hours that day. On a given day, Megan worked for 10 hours, and her total earnings for that day were $137.50. What is Megan's regular hourly wage?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "$11.75",
      "B": "$12.50",
      "C": "$13.25",
      "D": "$13.75"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 459,
    "stem": "y = 70x + 8\nWhich table gives three values of x and their corresponding values of y for the given equation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "x: 0, 2, 4 -> y: 8, 148, 288",
      "B": "x: 0, 2, 4 -> y: 70, 78, 86",
      "C": "x: 0, 2, 4 -> y: 70, 140, 280",
      "D": "x: 0, 2, 4 -> y: 8, 132, 272"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 460,
    "stem": "The function f is defined by f(x) = 5x + 8. For what value of x does f(x) = 58?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "10",
      "B": "13",
      "C": "50",
      "D": "298"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 461,
    "stem": "4x + 1 = 33\nWhich equation has the same solution as the given equation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "4x = 32",
      "B": "4x = 5",
      "C": "4x = 1",
      "D": "4x = -32"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 462,
    "stem": "If 3x + 2 = 8, what is the value of 9x + 6?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "24",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 463,
    "stem": "The graph of y = f(x) - 11 is shown. Which equation defines the linear function f?\n\n[Figure: xy-plane graph of y=f(x)-11, x-axis -4 to 4, y-axis -6 to 6. Line through (-1,-2) and (0,-4).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(x) = -13x - 11",
      "B": "f(x) = -2x + 7",
      "C": "f(x) = -13x + 7",
      "D": "f(x) = -2x - 11"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 464,
    "stem": "A piece of wire with a length of 32 inches is cut into two parts. One part has a length of x inches, and the other part has a length of y inches. The value of x is 4 more than 3 times the value of y. What is the value of x?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "25",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 465,
    "stem": "A bowl contains 20 ounces of water. When the bowl is uncovered, the amount of water in the bowl decreases by 1 ounce every 4 days. If 9 ounces of water remain in this bowl, for how many days has it been uncovered?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "3",
      "B": "7",
      "C": "36",
      "D": "44"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 466,
    "stem": "A model estimates that whales from the genus Eschrichtius travel 72 to 77 miles in the ocean each day during their migration. Based on this model, which inequality represents the estimated total number of miles, x, a whale from the genus Eschrichtius could travel in 16 days of its migration?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "72 + 16 <= x <= 77 + 16",
      "B": "(72)(16) <= x <= (77)(16)",
      "C": "72 <= 16 + x <= 77",
      "D": "72 <= 16x <= 77"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 467,
    "stem": "k + 12 = 336\nWhat is the solution to the given equation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "28",
      "B": "324",
      "C": "348",
      "D": "4,032"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 468,
    "stem": "The function f(x) is defined as 19 more than 4 times a number x. If y = f(x) is graphed in the xy-plane, what is the best interpretation of the x-intercept?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "When f(x) = 0, the number is -19/4.",
      "B": "When the number is 0, f(x) = 19.",
      "C": "The value of f(x) increases by 1 for each increase of 4 in the value of the number.",
      "D": "For each increase of 1 in the value of the number, f(x) increases by 4."
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 469,
    "stem": "The line with the equation (4/5)x + (1/3)y = 1 is graphed in the xy-plane. What is the x-coordinate of the x-intercept of the line?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "1.25",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 470,
    "stem": "The function h is defined by h(x) = x + 200. What is the value of h(50)?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "200",
      "B": "250",
      "C": "10,000",
      "D": "50,200"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 471,
    "stem": "What is the y-intercept of the graph of y = 34x + 81 in the xy-plane?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(0, 81)",
      "B": "(0, 34)",
      "C": "(0, -34)",
      "D": "(0, -81)"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 472,
    "stem": "The buildings of a shopping center are designed to allow water to drain from the roof into gutters on the sides of the buildings. The table shows the relationship between the area x, in square feet, of a roof and the amount of water f(x), in gallons, drained from the roof into the gutters over a certain period of time. Which equation could define f?\n\n[Figure: Table 'Area (sq ft)'/'Water (gallons)': (2520,4536),(3780,6804),(5040,9072).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(x) = 0.6x",
      "B": "f(x) = 1.8x",
      "C": "f(x) = 2,268x",
      "D": "f(x) = 4,536x"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 473,
    "stem": "One of the two equations in a linear system is 2x + 6y = 10. The system has no solution. Which of the following could be the other equation in the system?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "x + 3y = 5",
      "B": "x + 3y = -20",
      "C": "6x - 2y = 0",
      "D": "6x + 2y = 10"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 474,
    "stem": "The point with coordinates (d, 4) lies on the line shown. What is the value of d?\n\n[Figure: Line graph, axes 0-14. Line from (0,7) to (8,0).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "7/2",
      "B": "26/7",
      "C": "24/7",
      "D": "27/8"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 475,
    "stem": "If 5 - 7(2 - 4x) = 16 - 8(2 - 4x), what is the value of 2 - 4x?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "11",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 476,
    "stem": "66x = 66x. How many solutions does the given equation have?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Exactly one",
      "B": "Exactly two",
      "C": "Infinitely many",
      "D": "Zero"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 477,
    "stem": "y = (1/3)x - 14 and y = -x + 18. The solution to the given system of equations is (x, y). What is the value of x?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "24",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 478,
    "stem": "4x + 12 = a(x + 3)/2. In the given equation, a is a constant. If the equation has infinitely many solutions, what is the value of a?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "0",
      "B": "3",
      "C": "8",
      "D": "12"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 479,
    "stem": "Which of the following systems of equations has the same solution as the system of equations graphed above?\n\n[Figure: Two lines in xy-plane -5 to 5, intersecting near (3/2,0).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = 0; x = 3/2",
      "B": "y = 3/2; x = 0",
      "C": "y = 0; x = 1",
      "D": "y = 1; x = 0"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 480,
    "stem": "A moving truck can tow a trailer if the combined weight of the trailer and the boxes it contains is no more than 4,600 pounds. What is the maximum number of boxes this truck can tow in a trailer with a weight of 500 pounds if each box weighs 120 pounds?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "34",
      "B": "35",
      "C": "38",
      "D": "39"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 481,
    "stem": "An object hangs from a spring. The formula l = 30 + 2w relates length l, in centimeters, of the spring to the weight w, in newtons, of the object. Which of the following describes the meaning of the 2 in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The length, in centimeters, of the spring with no weight attached",
      "B": "The weight, in newtons, of an object that will stretch the spring 30 centimeters",
      "C": "The increase in the weight, in newtons, of the object for each one-centimeter increase in the length of the spring",
      "D": "The increase in the length, in centimeters, of the spring for each one-newton increase in the weight of the object"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 482,
    "stem": "The equation 9x + 5 = a(x + b), where a and b are constants, has no solutions. Which of the following must be true? I. a = 9  II. b = 5  III. b ≠ 5/9",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "None",
      "B": "I only",
      "C": "I and II only",
      "D": "I and III only"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 483,
    "stem": "What is the y-intercept of the line graphed?\n\n[Figure: Line graph x-axis -10 to 2, y-axis -2 to 10. Crosses x-axis near (-9,0), y-axis at (0,5).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(-5, 0)",
      "B": "(0, 0)",
      "C": "(0, 5)",
      "D": "(0, 9)"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 484,
    "stem": "3x + y = 29 and x = 2. If (x, y) is the solution to the given system of equations, what is the value of y?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "23",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 485,
    "stem": "(x - 2) - 4(y + 7) = 117 and (x - 2) + 4(y + 7) = 442. The solution to the given system of equations is (x, y). What is the value of 6(x - 2)?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "1677",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 486,
    "stem": "F = 2.50x + 7.00y. In the equation above, F represents the total amount of money, in dollars, a food truck charges for x drinks and y salads. The price, in dollars, of each drink is the same, and the price, in dollars, of each salad is the same. Which of the following is the best interpretation for the number 7.00 in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The price, in dollars, of one drink",
      "B": "The price, in dollars, of one salad",
      "C": "The number of drinks bought during the day",
      "D": "The number of salads bought during the day"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 487,
    "stem": "For the function f, if f(3x) = x - 6 for all values of x, what is the value of f(6)?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-6",
      "B": "-4",
      "C": "0",
      "D": "2"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 488,
    "stem": "3y = 4x + 17\n-3y = 9x - 23\nThe solution to the given system of equations is (x, y). What is the value of 39x?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-18",
      "B": "-6",
      "C": "6",
      "D": "18"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 489,
    "stem": "A proposal for a new library was included on an election ballot. A radio show stated that 3 times as many people voted in favor of the proposal as people who voted against it. A social media post reported that 15,000 more people voted in favor of the proposal than voted against it. Based on these data, how many people voted against the proposal?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "7,500",
      "B": "15,000",
      "C": "22,500",
      "D": "45,000"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 490,
    "stem": "A rocket contained 467,000 kilograms (kg) of propellant before launch. Exactly 21 seconds after launch, 362,105 kg of this propellant remained. On average, approximately how much propellant, in kg, did the rocket burn each second after launch?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "4,995",
      "B": "17,243",
      "C": "39,481",
      "D": "104,895"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 491,
    "stem": "The linear function g is defined by g(x) = b - 15x, where b is a constant. If g(c+7) = c/4, where c is a constant, which of the following expressions represents the value of b?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "15c/4",
      "B": "19c/4 + 7",
      "C": "61c/4 + 105",
      "D": "15c + 105"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 492,
    "stem": "2x + 3y = 7\n10x + 15y = 35\nFor each real number r, which of the following points lies on the graph of each equation in the xy-plane for the given system?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(r/5 + 7, -r/5 + 35)",
      "B": "(-3r/2 + 7/2, r)",
      "C": "(r, 2r/3 + 7/3)",
      "D": "(r, -3r/2 + 7/2)"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 493,
    "stem": "The function f is defined by f(x) = (9/7)x + 8/7. For what value of x does f(x) = 5?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "3",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 494,
    "stem": "In the xy-plane, line k is defined by x + y = 0. Line j is perpendicular to line k, and the y-intercept of line j is (0,3). Which of the following is an equation of line j?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "x + y = 3",
      "B": "x + y = -3",
      "C": "x - y = 3",
      "D": "x - y = -3"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 495,
    "stem": "The graph of a system of linear equations is shown. What is the solution (x, y) to the system?\n\n[Figure: xy-plane -6 to 6. Two lines intersect at (4,-5).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(4, -5)",
      "B": "(0, 3)",
      "C": "(0, -2)",
      "D": "(-2, 3)"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 496,
    "stem": "A line in the xy-plane has a slope of -1/2 and passes through the point (0, 3). Which equation represents this line?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = -1/2 x - 3",
      "B": "y = -1/2 x + 3",
      "C": "y = 1/2 x - 3",
      "D": "y = 1/2 x + 3"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 497,
    "stem": "The average annual energy cost for a certain home is $4,334. The homeowner plans to spend $25,000 to install a geothermal heating system. The homeowner estimates that the average annual energy cost will then be $2,712. Which of the following inequalities can be solved to find t, the number of years after installation at which the total amount of energy cost savings will exceed the installation cost?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "25,000 > (4,334 - 2,712)t",
      "B": "25,000 < (4,334 - 2,712)t",
      "C": "25,000 - 4,334 > 2,712t",
      "D": "25,000 > (4,332/2,712)t"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 498,
    "stem": "Henry receives a $60.00 gift card to pay for movies online. He uses his gift card to buy 3 movies for $7.50 each. If he spends the rest of his gift card balance on renting movies for $1.50 each, how many movies can Henry rent?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "10",
      "B": "25",
      "C": "35",
      "D": "40"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 499,
    "stem": "What value of t is the solution to the equation 0.8t - 0.46 = 8(t - 0.001) + 1.9?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "-.3266|-.3267|-49/150",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 500,
    "stem": "The table shows three values of x and their corresponding values of y, where n is a constant, for the linear relationship between x and y. What is the slope of the line that represents this relationship in the xy-plane?\n\n[Figure: Table x=-6,-3,0; y=n+184,n+92,n.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-92/3",
      "B": "-3/92",
      "C": "(n+92)/-3",
      "D": "(2n-92)/3"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 501,
    "stem": "The minimum value of x is 12 less than 6 times another number n. Which inequality shows the possible values of x?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "x <= 6n - 12",
      "B": "x >= 6n - 12",
      "C": "x <= 12 - 6n",
      "D": "x >= 12 - 6n"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 502,
    "stem": "The width of a rectangular dance floor is w feet. The length of the floor is 6 feet longer than its width. Which of the following expresses the perimeter, in feet, of the dance floor in terms of w?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "2w + 6",
      "B": "4w + 12",
      "C": "w^2 + 6",
      "D": "w^2 + 6w"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 503,
    "stem": "x + y = 350\nThe given equation relates the total number of maple trees, x, and the total number of birch trees, y, planted in a 14-acre forest preserve. If 245 maple trees were planted in the forest preserve, how many birch trees were planted in the forest preserve?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "14",
      "B": "25",
      "C": "105",
      "D": "245"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 504,
    "stem": "A neighborhood consists of a 2-hectare park and a 35-hectare residential area. The total number of trees in the neighborhood is 3,934. The equation 2x + 35y = 3,934 represents this situation. Which of the following is the best interpretation of x in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The average number of trees per hectare in the park",
      "B": "The average number of trees per hectare in the residential area",
      "C": "The total number of trees in the park",
      "D": "The total number of trees in the residential area"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 505,
    "stem": "Jay walks at a speed of 3 miles per hour and runs at a speed of 5 miles per hour. He walks for w hours and runs for r hours for a combined total of 14 miles. Which equation represents this situation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "3w + 5r = 14",
      "B": "(1/3)w + (1/5)r = 14",
      "C": "(1/3)w + (1/5)r = 112",
      "D": "3w + 5r = 112"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 506,
    "stem": "Scientists collected fallen acorns that each housed a colony of the ant species P. ohioensis and analyzed each colony's structure. For any of these colonies, if the colony has x worker ants, the equation y = 0.67x + 2.6, where 20 <= x <= 110, gives the predicted number of larvae, y, in the colony. If one of these colonies has 58 worker ants, which of the following is closest to the predicted number of larvae in the colony?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "41",
      "B": "61",
      "C": "83",
      "D": "190"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 507,
    "stem": "A librarian has 43 books to distribute to a group of children. If he gives each child 2 books, he will have 7 books left over. How many children are in the group?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "15",
      "B": "18",
      "C": "25",
      "D": "29"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 508,
    "stem": "A manager is responsible for ordering supplies for a shaved ice shop. The shop's inventory starts with 4,500 paper cups, and the manager estimates that 70 of these paper cups are used each day. Based on this estimate, in how many days will the supply of paper cups reach 1,700?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "20",
      "B": "40",
      "C": "60",
      "D": "80"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 509,
    "stem": "The graph of the function f is a line in the xy-plane. If the line has slope 3/4 and f(0) = 3, which of the following defines f?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(x) = (3/4)x - 3",
      "B": "f(x) = (3/4)x + 3",
      "C": "f(x) = 4x - 3",
      "D": "f(x) = 4x + 3"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 510,
    "stem": "8x + y = 5\ny = 9x + 1\nThe solution to the given system of equations is (x, y). What is the value of x?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-6",
      "B": "4/17",
      "C": "6/17",
      "D": "4"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 511,
    "stem": "The graph represents the total charge, in dollars, by an electrician for x hours of work. The electrician charges a onetime fee plus an hourly rate. What is the best interpretation of the slope of the graph?\n\n[Figure: xy-plane unlabeled scales, origin O. Line begins at origin, positive slope.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The electrician's hourly rate",
      "B": "The electrician's onetime fee",
      "C": "The maximum amount that the electrician charges",
      "D": "The total amount that the electrician charges"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 512,
    "stem": "In 2010, a swim club had a total of 35 swimmers, each classified as either advanced or intermediate. From 2010 to 2020, the number of advanced swimmers in the club increased by approximately 53%, and the number of intermediate swimmers in the club increased by approximately 44%. The total number of swimmers in the club increased by approximately 49%. Which equation best represents this situation, where a represents the number of advanced swimmers in the club in 2010 and b represents the number of intermediate swimmers in the club in 2010?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "1.53a + 1.49b = 35(1.44)",
      "B": "1.49a + 0.53b = 35(1.44)",
      "C": "1.53a + 1.44b = 35(1.49)",
      "D": "1.44a + 1.53b = 35(1.49)"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 513,
    "stem": "y = 6x + 18\nOne of the equations in a system of two linear equations is given. The system has no solution. Which equation could be the second equation in the system?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-6x + y = 18",
      "B": "-6x + y = 22",
      "C": "-12x + y = 36",
      "D": "-12x + y = 18"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 514,
    "stem": "Oxygen gas is placed inside a tank with a constant volume. The graph shows the estimated temperature y, in kelvins, of the oxygen gas when its pressure is x atmospheres. What is the estimated temperature, in kelvins, of the oxygen gas when its pressure is 6 atmospheres?\n\n[Figure: Line graph, x-axis 'Pressure (atm)' 0-10, y-axis 'Temperature (kelvins)' 100-1000. Line through (2,200) to (9,1050), through (6,700).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "6",
      "B": "60",
      "C": "700",
      "D": "760"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 515,
    "stem": "An online bookstore sells novels and magazines. Each novel sells for $4, and each magazine sells for $1. If Sadie purchased a total of 11 novels and magazines that have a combined selling price of $20, how many novels did she purchase?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 516,
    "stem": "6x + k = 6x + 5\nIn the given equation, k is a constant. If the equation has infinitely many solutions, what is the value of k?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "5",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 517,
    "stem": "In a chess tournament, each participant earns 1 point for each game the participant plays that ends in a draw and 3 points for each game the participant wins. A certain participant in this tournament has earned 41 points. Which equation represents this situation, where d represents the number of games this participant has played that ended in a draw and w represents the number of games this participant has won?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "d + 3w = 41",
      "B": "3d + w = 41",
      "C": "d + w/3 = 41",
      "D": "d/3 + w = 41"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 518,
    "stem": "What is the y-coordinate of the y-intercept of the graph of 3x/7 = -5y/9 + 21 in the xy-plane?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "189/5",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 519,
    "stem": "If (x-5)/7 = (x-5)/9, the value of x - 5 is between which of the following pairs of values?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-9 and -7",
      "B": "-3 and 3",
      "C": "4.5 and 5.5",
      "D": "6.75 and 9.25"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 520,
    "stem": "How many liters of a 25% saline solution must be added to 3 liters of a 10% saline solution to obtain a 15% saline solution?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "1.5",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 521,
    "stem": "The graph of a system of linear equations is shown. What is the solution (x, y) to the system?\n\n[Figure: xy-plane -10 to 1 both axes. Two lines intersect at (-4,-3).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(0, -7)",
      "B": "(0, -3)",
      "C": "(-4, -3)",
      "D": "(-4, 0)"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 522,
    "stem": "5x + 3y = 38\nx + 3y = 10\nIn the solution (x, y) to the system of equations above, what is the value of x?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "7",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 523,
    "stem": "A science teacher is preparing the 5 stations of a science laboratory. Each station will have either Experiment A materials or Experiment B materials, but not both. Experiment A requires 6 teaspoons of salt, and Experiment B requires 4 teaspoons of salt. If x is the number of stations that will be set up for Experiment A and the remaining stations will be set up for Experiment B, which of the following expressions represents the total number of teaspoons of salt required?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "5x",
      "B": "10x",
      "C": "2x + 20",
      "D": "10x + 20"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 524,
    "stem": "The function f is defined by f(x) = -3x + 60. What is the value of f(x) when x = -8?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "49",
      "B": "52",
      "C": "57",
      "D": "84"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 525,
    "stem": "2x + y = 37\nIn triangle QRS, sides QR and RS each have a length of x centimeters and side SQ has a length of y centimeters. The given equation represents this situation. Which of the following is the best interpretation of 37 in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The difference, in centimeters, between the lengths of sides QR and SQ",
      "B": "The difference, in centimeters, between the lengths of sides QR and RS",
      "C": "The sum of the lengths, in centimeters, of the three sides of the triangle",
      "D": "The length, in centimeters, of one of the two sides of equal length"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 526,
    "stem": "What is the slope of the graph of y = (1/4)(27x + 15) + 7x in the xy-plane?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "13.75|55/4",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 527,
    "stem": "If 2(x-5) + 3(x-5) = 10, what is the value of x - 5?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "2",
      "B": "5",
      "C": "7",
      "D": "12"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 528,
    "stem": "The relationship between two variables, x and y, is linear. For every increase in the value of x by 1, the value of y increases by 8. When the value of x is 2, the value of y is 18. Which equation represents this relationship?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = 2x + 18",
      "B": "y = 2x + 8",
      "C": "y = 8x + 2",
      "D": "y = 3x + 26"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 529,
    "stem": "2l + 2w <= 27\nA rectangle has length l and width w. The inequality gives the possible values of l and w for which the perimeter of this rectangle is less than or equal to 27. Which statement is the best interpretation of (l, w) = (8, 3) in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "If the rectangle has length 3 and width 8, its perimeter is less than or equal to 27.",
      "B": "If the rectangle has length 8 and width 3, its perimeter is less than or equal to 27.",
      "C": "If the rectangle has length 3 and width 8, its perimeter is greater than or equal to 27.",
      "D": "If the rectangle has length 8 and width 3, its perimeter is greater than or equal to 27."
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 530,
    "stem": "Maria plans to rent a boat. The boat rental costs $60 per hour, and she will also have to pay for a water safety course that costs $10. Maria wants to spend no more than $280 for the rental and the course. If the boat rental is available only for a whole number of hours, what is the maximum number of hours for which Maria can rent the boat?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "4",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 531,
    "stem": "Robert rented a truck to transport materials he purchased from a hardware store. He was charged an initial fee of $20.00 plus an additional $0.70 per mile driven. If the truck was driven 38 miles, what was the total amount Robert was charged?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "$46.60",
      "B": "$52.90",
      "C": "$66.90",
      "D": "$86.50"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 532,
    "stem": "A line passes through the points (4, 6) and (15, 24) in the xy-plane. What is the slope of the line?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "1.636|18/11",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 533,
    "stem": "(1/4)(x+5) - (1/3)(x+5) = -7\nWhat value of x is the solution to the given equation?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-12",
      "B": "-5",
      "C": "79",
      "D": "204"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 534,
    "stem": "A discount airline sells a certain number of tickets, x, for a flight for $90 each. It sells the number of remaining tickets, y, for $250 each. For a particular flight, the airline sold 120 tickets and collected a total of $27,600 from the sale of those tickets. Which system of equations represents this relationship between x and y?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "x + y = 120; 90x + 250y = 27,600",
      "B": "x + y = 120; 90x + 250y = 120(27,600)",
      "C": "x + y = 27,600; 90x + 250y = 120(27,600)",
      "D": "90x = 250y; 120x + 120y = 27,600"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 535,
    "stem": "f(x) = 2x + 3\nFor the given function f, the graph of y = f(x) in the xy-plane is parallel to line j. What is the slope of line j?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "2",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 536,
    "stem": "The equation h = 9(v-273.15)/5 + 32 gives the corresponding temperature h, in degrees Fahrenheit, of any substance that has a temperature of v kelvins, where v > 0. If a substance has a temperature of 467.33 degrees Fahrenheit, what is the corresponding temperature, in kelvins, of this substance?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "515",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 537,
    "stem": "What is the y-intercept of the line graphed?\n\n[Figure: Graph x-axis 0-10, y-axis 0-10. Line starts at (0,8), rises gently to ~(10,10).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(0, -8)",
      "B": "(0, -1/8)",
      "C": "(0, 0)",
      "D": "(0, 8)"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 538,
    "stem": "The equation 46 = 2a + 2b gives the relationship between the side lengths a and b of a certain parallelogram. If a = 9, what is the value of b?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "14",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 539,
    "stem": "A movie theater charges $11 for each full-price ticket and $8.25 for each reduced-price ticket. For one movie showing, the theater sold a total of 214 full-price and reduced-price tickets for $2,145. Which of the following systems of equations could be used to determine the number of full-price tickets, f, and the number of reduced-price tickets, r, sold?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f + r = 2,145; 11f + 8.25r = 214",
      "B": "f + r = 214; 11f + 8.25r = 2,145",
      "C": "f + r = 214; 8.25f + 11r = 2,145",
      "D": "f + r = 2,145; 8.25f + 11r = 214"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 540,
    "stem": "The function f is defined by f(x) = mx + b, where m and b are constants. If f(0) = 18 and f(1) = 20, what is the value of m?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "2",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 541,
    "stem": "A line in the xy-plane has a slope of 9 and passes through the point (0, -5). The equation y = px + r defines the line, where p and r are constants. What is the value of p?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "9",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 542,
    "stem": "P(t) = 250 + 10t. The population of snow leopards in a certain area can be modeled by the function P defined above, where P(t) is the population t years after 1990. Of the following, which is the best interpretation of the equation P(30) = 550?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The snow leopard population in this area is predicted to be 30 in the year 2020.",
      "B": "The snow leopard population in this area is predicted to be 30 in the year 2030.",
      "C": "The snow leopard population in this area is predicted to be 550 in the year 2020.",
      "D": "The snow leopard population in this area is predicted to be 550 in the year 2030."
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 543,
    "stem": "For groups of 25 or more people, a museum charges $21 per person for the first 25 people and $14 for each additional person. Which function f gives the total charge, in dollars, for a tour group with n people, where n >= 25?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(n) = 14n + 175",
      "B": "f(n) = 14n + 525",
      "C": "f(n) = 35n - 350",
      "D": "f(n) = 14n + 21"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 544,
    "stem": "x + y = 53\n11x + 18y = 730\nThe given equations represent the possible numbers of beach chairs, x, and umbrellas, y, rented at a park last month and the total spent, in dollars, to rent those beach chairs and umbrellas. Which of the following graphs represents this situation?\n\n[Figure: Four answer-choice graphs, axes 0-80. Correct choice B: two downward-sloping lines, x+y=53 (intercepts (53,0),(0,53)) and 11x+18y=730 (intercepts ~(66,0),(0,41)), intersecting near (23,30).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Graph with lines y=x and 11x+18y=730",
      "B": "Graph with lines x+y=53 (intercepts 53,0 and 0,53) and 11x+18y=730 (intercepts ~66,0 and 0,41), crossing near (23,30)",
      "C": "Graph with lines x+y=53 and -11x+18y=730",
      "D": "Graph with horizontal line y=53 and -11x+18y=730"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 545,
    "stem": "The graph shows a linear relationship between x and y. Which equation represents this relationship, where R is a positive constant?\n\n[Figure: xy-plane -10 to 10. Line through (0,6) and (2,0), slope -3.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Rx + 18y = 36",
      "B": "Rx - 18y = -36",
      "C": "18x + Ry = 36",
      "D": "18x - Ry = -36"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 546,
    "stem": "What value of p satisfies the equation 2p + 275 = 325?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "5",
      "B": "25",
      "C": "48",
      "D": "300"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 547,
    "stem": "If y = 5x + 10, what is the value of y when x = 8?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "50",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 548,
    "stem": "The cost of renting a carpet cleaner is $52 for the first day and $26 for each additional day. Which of the following functions gives the cost C(d), in dollars, of renting the carpet cleaner for d days, where d is a positive integer?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "C(d) = 26d + 26",
      "B": "C(d) = 26d + 52",
      "C": "C(d) = 52d - 26",
      "D": "C(d) = 52d + 78"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 549,
    "stem": "Naomi bought both rabbit snails and nerite snails for a total of $52. Each rabbit snail costs $8 and each nerite snail costs $6. If Naomi bought 2 nerite snails, how many rabbit snails did she buy?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "5",
      "B": "12",
      "C": "14",
      "D": "50"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 550,
    "stem": "The shaded region shown represents the solutions to which inequality?\n\n[Figure: xy-plane -8 to 8. Dashed line through (0,1),(1,-3), slope -4.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y < 1 + 4x",
      "B": "y < 1 - 4x",
      "C": "y > 1 + 4x",
      "D": "y > 1 - 4x"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 551,
    "stem": "In the xy-plane, line s passes through the point (0,0) and is parallel to the line represented by the equation y = 18x + 2. If line s also passes through the point (4, d), what is the value of d?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "2",
      "B": "18",
      "C": "72",
      "D": "74"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 552,
    "stem": "If 8x = 6, what is the value of 72x?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "3",
      "B": "15",
      "C": "54",
      "D": "57"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 553,
    "stem": "y = 6x + 16\n-7x - y = 36\nWhat is the solution (x, y) to the given system of equations?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(-4, -8)",
      "B": "(-20/13, -80/13)",
      "C": "(4, 40)",
      "D": "(20, 136)"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 554,
    "stem": "Last week, an interior designer earned a total of $1,258 from consulting for x hours and drawing up plans for y hours. The equation 68x + 85y = 1,258 represents this situation. Which of the following is the best interpretation of 68 in this context?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "The interior designer earned $68 per hour consulting last week.",
      "B": "The interior designer worked 68 hours drawing up plans last week.",
      "C": "The interior designer earned $68 per hour drawing up plans last week.",
      "D": "The interior designer worked 68 hours consulting last week."
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 555,
    "stem": "x + 3y = 29\n3y = 11\nThe solution to the given system of equations is (x, y). What is the value of x?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "18",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 556,
    "stem": "Angela is playing a video game. In this game, players can score points only by collecting coins and stars. Each coin is worth c points, and each star is worth s points. The first time she played, Angela scored 700 points. She collected 20 coins and 10 stars. The second time she played, Angela scored 850 points. She collected 25 coins and 12 stars. Which system of equations can be used to correctly determine the values of c and s?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "10c + 20s = 700; 12c + 25s = 850",
      "B": "20c + 10s = 700; 25c + 12s = 850",
      "C": "20c + 700s = 10; 25c + 850s = 12",
      "D": "700c + 20s = 10; 850c + 25s = 12"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 557,
    "stem": "The table above shows the population of Greenleaf, Idaho, for the years 2000 and 2010. If the relationship between population and year is linear, which of the following functions P models the population of Greenleaf t years after 2000?\n\n[Figure: Table 'Population of Greenleaf, Idaho': Year 2000 Pop 862; Year 2010 Pop 846.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "P(t) = 862 - 1.6t",
      "B": "P(t) = 862 - 16t",
      "C": "P(t) = 862 + 16(t - 2,000)",
      "D": "P(t) = 862 - 1.6(t - 2,000)"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 558,
    "stem": "A linear function f gives a company's profit, in dollars, for selling x items. The company's profit is $220 when it sells 8 items, and its profit is $320 when it sells 10 items. Which equation defines f?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(x) = 150x - 320",
      "B": "f(x) = 32x",
      "C": "f(x) = 50x - 10x",
      "D": "f(x) = 50x - 180"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 559,
    "stem": "If 9(4 - 3x) + 2 = 8(4 - 3x) + 18, what is the value of 4 - 3x?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-16",
      "B": "-4",
      "C": "4",
      "D": "16"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 560,
    "stem": "The y-intercept of the graph of y = -6x - 32 in the xy-plane is (0, y). What is the value of y?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "-32",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 561,
    "stem": "If 5x = 20, what is the value of 15x?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "7",
      "B": "12",
      "C": "23",
      "D": "60"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 562,
    "stem": "What is the equation of the line shown in the xy-plane above?\n\n[Figure: xy-plane -5 to 5. Line through (0,3) and (1,0), slope -3.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = 3x - 3",
      "B": "y = -3x + 3",
      "C": "y = (1/3)x - 3",
      "D": "y = -(1/3)x + 3"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 563,
    "stem": "What is the solution to the equation 2x + 3 = 7?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "1",
      "B": "1.5",
      "C": "2",
      "D": "4"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 564,
    "stem": "f(x) = x + b\nFor the linear function f, b is a constant. When x = 0, f(x) = 30. What is the value of b?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-30",
      "B": "-1/30",
      "C": "1/30",
      "D": "30"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 565,
    "stem": "If a new graph of three linear equations is created using the system of equations shown and the equation x + 4y = -16, how many solutions (x, y) will the resulting system of three equations have?\n\n[Figure: xy-plane -10 to 10. Two lines intersect at (8,2).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Zero",
      "B": "Exactly one",
      "C": "Exactly two",
      "D": "Infinitely many"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 566,
    "stem": "Davio bought some potatoes and celery. The potatoes cost $0.69 per pound, and the celery cost $0.99 per pound. If Davio spent $5.34 in total and bought twice as many pounds of celery as pounds of potatoes, how many pounds of celery did Davio buy?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "2",
      "B": "2.5",
      "C": "2.67",
      "D": "4"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 567,
    "stem": "The function g is defined by g(x) = 10x + 8. What is the value of g(x) when x = 8?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "0",
      "B": "8",
      "C": "10",
      "D": "88"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 568,
    "stem": "If x = 40, what is the value of x + 6?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "34",
      "B": "40",
      "C": "46",
      "D": "64"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 569,
    "stem": "A candle is made of 17 ounces of wax. When the candle is burning, the amount of wax in the candle decreases by 1 ounce every 4 hours. If 6 ounces of wax remain in this candle, for how many hours has it been burning?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "3",
      "B": "6",
      "C": "24",
      "D": "44"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 570,
    "stem": "2x + 7y = 9\n8x + 28y = a\nIn the given system of equations, a is a constant. If the system has infinitely many solutions, what is the value of a?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "4",
      "B": "9",
      "C": "36",
      "D": "54"
    },
    "answer": "C",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 571,
    "stem": "For the linear function f, the graph of y = f(x) in the xy-plane has a slope of 1/4 and passes through the point (0, 5). Which equation defines f?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f(x) = (1/4)x + 5",
      "B": "f(x) = (1/4)x + 1/5",
      "C": "f(x) = (1/4)x - 5/4",
      "D": "f(x) = (1/4)x - 5"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 572,
    "stem": "Monarch butterflies can fly only with a body temperature of at least 55.0 degrees Fahrenheit (°F). If a monarch butterfly's body temperature is 51.3°F, what is the minimum increase needed in its body temperature, in °F, so that it can fly?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "1.3",
      "B": "3.7",
      "C": "5.0",
      "D": "6.3"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 573,
    "stem": "The table shows two values of x and their corresponding values of y. In the xy-plane, the graph of the linear equation representing this relationship passes through the point (1/7, a). What is the value of a?\n\n[Figure: Table x=-18,y=-48; x=7,y=52.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "-4/11",
      "B": "-4/77",
      "C": "4/7",
      "D": "172/7"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Hard"
  },
  {
    "num": 574,
    "stem": "A cleaning service that cleans both offices and homes can clean at most 14 places per day. Which inequality represents this situation, where f is the number of offices and h is the number of homes?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "f + h <= 14",
      "B": "f + h >= 14",
      "C": "f - h <= 14",
      "D": "f - h >= 14"
    },
    "answer": "A",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 575,
    "stem": "A store sells two different-sized containers of blueberries. The store's sales of these blueberries totaled 896.86 dollars last month. The equation 4.51x + 6.07y = 896.86 represents this situation, where x is the number of smaller containers sold and y is the number of larger containers sold. According to the equation, what is the price, in dollars, of each smaller container?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "4.51|451/100",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 576,
    "stem": "10x = 110\n6x - 63 = y\nThe solution to the given system of equations is (x, y). What is the value of y?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "63",
      "B": "11",
      "C": "10",
      "D": "3"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 577,
    "stem": "f(x) = 7x + 1\nThe function gives the total number of people on a company retreat with x managers. What is the total number of people on a company retreat with 7 managers?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "50",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 578,
    "stem": "Which of the following is the graph of the equation y = 2x - 5 in the xy-plane?\n\n[Figure: Four xy-plane graphs -5 to 5, each showing a line. Only D (slope 2, y-intercept -5) correctly represents y=2x-5.]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "Line slope 1/2, y-intercept 2.5",
      "B": "Line slope -2, y-intercept -5",
      "C": "Line slope 2, y-intercept 5",
      "D": "Line slope 2, y-intercept -5"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Easy"
  },
  {
    "num": 579,
    "stem": "y ≤ 3x + 1\nx - y > 1\nWhich of the following ordered pairs (x, y) satisfies the system of inequalities above?",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "(-2, -1)",
      "B": "(-1, 3)",
      "C": "(1, 5)",
      "D": "(2, -1)"
    },
    "answer": "D",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 580,
    "stem": "The graph models the relationship between the number of T-shirts, x, and the number of sweatshirts, y, that Kira can purchase for a school fundraiser. Which equation could represent this relationship?\n\n[Figure: Line graph, x-axis 'Number of T-shirts' 0-100, y-axis 'Number of sweatshirts' 0-50. Line from (0,35) to (90,0).]",
    "images": [],
    "type": "mc",
    "choices": {
      "A": "y = 7x + 18",
      "B": "7x + 18y = 630",
      "C": "y = 18x + 7",
      "D": "18x + 7y = 630"
    },
    "answer": "B",
    "domain": "Algebra",
    "difficulty": "Medium"
  },
  {
    "num": 581,
    "stem": "5y = 10x + 11\n-5y = 5x - 21\nThe solution to the given system of equations is (x, y). What is the value of 30x?",
    "images": [],
    "type": "grid",
    "choices": null,
    "answer": "20",
    "domain": "Algebra",
    "difficulty": "Hard"
  }
],
  "Advanced Math": [],
  "Problem-Solving and Data Analysis": [],
  "Geometry and Trigonometry": []
};
