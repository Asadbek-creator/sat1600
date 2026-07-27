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
  "Advanced Math": [
{ num: 1, stem: "A rectangle has a length that is 15 times its width. The function y = (15w)(w) represents this situation, where y is the area, in square feet, of the rectangle and y > 0. Which of the following is the best interpretation of 15w in this context?", images: [], type: "mc", choices: {"A": "The length of the rectangle, in feet", "B": "The area of the rectangle, in square feet", "C": "The difference between the length and the width of the rectangle, in feet", "D": "The width of the rectangle, in feet"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 2, stem: "v = -w/(150x)\nThe given equation relates the distinct positive numbers v, w, and x. Which equation correctly expresses w in terms of v and x?", images: [], type: "mc", choices: {"A": "w = -150vx", "B": "w = -150v/x", "C": "w = -x/(150v)", "D": "w = v + 150x"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 3, stem: "Which expression is equivalent to (m^4 * q^4 * z^-1)(m * q^5 * z^3), where m, q, and z are positive?", images: [], type: "mc", choices: {"A": "m^4 * q^20 * z^-3", "B": "m^5 * q^9 * z^2", "C": "m^6 * q^8 * z^-1", "D": "m^20 * q^12 * z^-2"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 4, stem: "A system of equations consists of a quadratic equation and a linear equation. The equations in this system are graphed in the xy-plane above. How many solutions does this system have?\n\n[Figure: An xy-plane with both axes gridded from -10 to 10 in increments of 5. An upward-opening parabola (quadratic) has its vertex located near the origin, slightly to the right of the y-axis and slightly below the x-axis (around (1,-2)); the parabola rises steeply on both sides, passing through high y-values (near y=10) around x=-4 and x=5. A straight line with a shallow positive slope crosses the plane from lower-left to upper-right, roughly passing near (-8,-3) to (10,6). The line and parabola cross each other at exactly two distinct points, one to the left of the parabola's vertex and one to the right.]", images: [], type: "mc", choices: {"A": "0", "B": "1", "C": "2", "D": "3"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 5, stem: "6x - 9y > 12\nWhich of the following inequalities is equivalent to the inequality above?", images: [], type: "mc", choices: {"A": "x - y > 2", "B": "2x - 3y > 4", "C": "3x - 2y > 4", "D": "3y - 2x > 2"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 6, stem: "y = x + 1\ny = x^2 + x\nIf (x, y) is a solution to the system of equations above, which of the following could be the value of x?", images: [], type: "mc", choices: {"A": "-1", "B": "0", "C": "2", "D": "3"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 7, stem: "Which expression is equivalent to 16x^3*y^2 + 14xy?", images: [], type: "mc", choices: {"A": "2xy(8xy + 7)", "B": "2xy(8x^2*y + 7)", "C": "14xy(2x^2*y + 1)", "D": "14xy(8x^2*y + 1)"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 8, stem: "4a^2 + 20ab + 25b^2\nWhich of the following is a factor of the polynomial above?", images: [], type: "mc", choices: {"A": "a + b", "B": "2a + 5b", "C": "4a + 5b", "D": "4a + 25b"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 9, stem: "If p = 3x + 4 and v = x + 5, which of the following is equivalent to pv - 2p + v?", images: [], type: "mc", choices: {"A": "3x^2 + 12x + 7", "B": "3x^2 + 14x + 17", "C": "3x^2 + 19x + 20", "D": "3x^2 + 26x + 33"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 10, stem: "x^2 - x - 1 = 0\nWhat values satisfy the equation above?", images: [], type: "mc", choices: {"A": "x = 1 and x = 2", "B": "x = -1/2 and x = 3/2", "C": "x = (1 + sqrt(5))/2 and x = (1 - sqrt(5))/2", "D": "x = (-1 + sqrt(5))/2 and x = (-1 - sqrt(5))/2"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 11, stem: "3x^2 - 15x + 18 = 0\nHow many distinct real solutions are there to the given equation?", images: [], type: "mc", choices: {"A": "Exactly one", "B": "Exactly two", "C": "Infinitely many", "D": "Zero"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 12, stem: "The product of two positive integers is 462. If the first integer is 5 greater than twice the second integer, what is the smaller of the two integers?", images: [], type: "grid", choices: null, answer: "14", domain: "Advanced Math", difficulty: "Hard" },
{ num: 13, stem: "The function g is defined by g(x) = |x|/a - 14, where a < 0. What is the product of g(15a) and g(7a)?", images: [], type: "grid", choices: null, answer: "609", domain: "Advanced Math", difficulty: "Hard" },
{ num: 14, stem: "The graph shown gives the estimated value, in dollars, of a tablet as a function of the number of months since it was purchased. What is the best interpretation of the y-intercept of the graph in this context?\n\n[Figure: A graph with the y-axis labeled 'Value (dollars)', gridded from 0 to about 350+ in increments of 50, and the x-axis labeled 'Number of months after purchase', gridded from 0 to 24 in increments of 4. The curve is a smooth, concave-up decreasing curve (exponential-decay shape) starting at the y-intercept (0, 225), dropping steeply at first, then leveling off and approaching approximately (24, 50) by the right edge of the graph.]", images: [], type: "mc", choices: {"A": "The estimated value of the tablet was $225 when it was purchased.", "B": "The estimated value of the tablet 24 months after it was purchased was $225.", "C": "The estimated value of the tablet had decreased by $225 in the 24 months after it was purchased.", "D": "The estimated value of the tablet decreased by approximately 2.25% each year after it was purchased."}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 15, stem: "(x + 5) + (2x - 3)\nWhich of the following is equivalent to the given expression?", images: [], type: "mc", choices: {"A": "3x - 2", "B": "3x + 2", "C": "3x - 8", "D": "3x + 8"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 16, stem: "The table shows three values of x and their corresponding values of g(x), where g(x) = f(x)/(x+3) and f is a linear function. What is the y-intercept of the graph of y = f(x) in the xy-plane?\n\n[Figure: A table with two columns, x and g(x), listing three rows of paired values: x = -27, g(x) = 3; x = -9, g(x) = 0; x = 21, g(x) = 5.]", images: [], type: "mc", choices: {"A": "(0, 36)", "B": "(0, 12)", "C": "(0, 4)", "D": "(0, -9)"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 17, stem: "Which expression is equivalent to (8x(x-7) - 3(x-7)) / (2x-14), where x > 7?", images: [], type: "mc", choices: {"A": "(x-7)/5", "B": "(8x-3)/2", "C": "(8x^2 - 3x - 14)/(2x-14)", "D": "(8x^2 - 3x - 77)/(2x-14)"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 18, stem: "x = 49\ny = sqrt(x) + 9\nThe graphs of the given equations intersect at the point (x, y) in the xy-plane. What is the value of y?", images: [], type: "mc", choices: {"A": "16", "B": "40", "C": "81", "D": "130"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 19, stem: "h(x) = 2(x-4)^2 - 32\nThe quadratic function h is defined as shown. In the xy-plane, the graph of y = h(x) intersects the x-axis at the points (0,0) and (t,0), where t is a constant. What is the value of t?", images: [], type: "mc", choices: {"A": "1", "B": "2", "C": "4", "D": "8"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 20, stem: "The graph shown will be translated up 4 units. Which of the following will be the resulting graph?\n\n[Figure: The original graph (in the Question section) shows an upward-opening parabola in the xy-plane (x-axis from -6 to 10, y-axis from -8 to 4). The parabola has vertex at (2, -2) and passes through the points (1, -1), (2, -2), and (3, -1). Each answer choice (A-D) shows a graph of the same parabola shape translated to a different position; only choice A shows it translated up 4 units (vertex moves from (2,-2) to (2,2)).]", images: [], type: "mc", choices: {"A": "[Graph] An upward-opening parabola with vertex at (2, 2), passing through the points (1, 3), (2, 2), and (3, 3).", "B": "[Graph] An upward-opening parabola with vertex at (2, -6), passing through the points (1, -5), (2, -6), and (3, -5).", "C": "[Graph] An upward-opening parabola with vertex at (-2, -2), passing through the points (-3, -1), (-2, -2), and (-1, -1).", "D": "[Graph] An upward-opening parabola with vertex at (6, -2), passing through the points (5, -1), (6, -2), and (7, -1)."}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 21, stem: "f(x) = x^2 - 48x + 2,304\n\nWhat is the minimum value of the given function?", images: [], type: "grid", choices: null, answer: "1728", domain: "Advanced Math", difficulty: "Hard" },
{ num: 22, stem: "2|4 - x| + 3|4 - x| = 25\n\nWhat is the positive solution to the given equation?", images: [], type: "grid", choices: null, answer: "9", domain: "Advanced Math", difficulty: "Hard" },
{ num: 23, stem: "The function f is defined by f(x) = (-8)(2)^x + 22. What is the y-intercept of the graph of y = f(x) in the xy-plane?", images: [], type: "mc", choices: {"A": "(0, 14)", "B": "(0, 2)", "C": "(0, 22)", "D": "(0, -8)"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 24, stem: "The graph shows the height above ground, in meters, of a ball x seconds after the ball was launched upward from a platform. Which statement is the best interpretation of the marked point (1.0, 4.8) in this context?\n\n[Figure: A graph plots height above ground in meters (y-axis, 0 to 7) versus time in seconds (x-axis, 0 to 3) for a ball launched upward from a platform. The curve starts at about (0, 3.8), rises to a peak of about 5.6 meters near x=0.6 seconds, then decreases, passing through a marked point at (1.0, 4.8), and continues down to reach the ground (height 0) at about x=1.9 seconds.]", images: [], type: "mc", choices: {"A": "1.0 second after being launched, the ball's height above ground is 4.8 meters.", "B": "4.8 seconds after being launched, the ball's height above ground is 1.0 meter.", "C": "The ball was launched from an initial height of 1.0 meter with an initial velocity of 4.8 meters per second.", "D": "The ball was launched from an initial height of 4.8 meters with an initial velocity of 1.0 meter per second."}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 25, stem: "An auditorium has seats for 1,800 people. Tickets to attend a show at the auditorium currently cost $4.00. For each $1.00 increase to the ticket price, 100 fewer tickets will be sold. This situation can be modeled by the equation y = -100x^2 + 1,400x + 7,200, where x represents the increase in ticket price, in dollars, and y represents the revenue, in dollars, from ticket sales. If this equation is graphed in the xy-plane, at what value of x is the maximum of the graph?", images: [], type: "mc", choices: {"A": "4", "B": "7", "C": "14", "D": "18"}, answer: "B", domain: "Advanced Math", difficulty: "Hard" },
{ num: 26, stem: "x^2 - 2x - 9 = 0\n\nOne solution to the given equation can be written as 1 + sqrt(k), where k is a constant. What is the value of k?", images: [], type: "mc", choices: {"A": "8", "B": "10", "C": "20", "D": "40"}, answer: "B", domain: "Advanced Math", difficulty: "Hard" },
{ num: 27, stem: "p(x) + 57 = x^2\n\nThe given equation relates the value of x and its corresponding value of p(x) for the function p. What is the minimum value of the function p?", images: [], type: "mc", choices: {"A": "-3,249", "B": "-57", "C": "57", "D": "3,249"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 28, stem: "In the xy-plane, a line with equation 2y = 4.5 intersects a parabola at exactly one point. If the parabola has equation y = -4x^2 + bx, where b is a positive constant, what is the value of b?", images: [], type: "grid", choices: null, answer: "6", domain: "Advanced Math", difficulty: "Hard" },
{ num: 29, stem: "f(x) = 9,000(0.66)^x\n\nThe given function f models the number of advertisements a company sent to its clients each year, where x represents the number of years since 1997, and 0 <= x <= 5. If y = f(x) is graphed in the xy-plane, which of the following is the best interpretation of the y-intercept of the graph in this context?", images: [], type: "mc", choices: {"A": "The minimum estimated number of advertisements the company sent to its clients during the 5 years was 1,708.", "B": "The minimum estimated number of advertisements the company sent to its clients during the 5 years was 9,000.", "C": "The estimated number of advertisements the company sent to its clients in 1997 was 1,708.", "D": "The estimated number of advertisements the company sent to its clients in 1997 was 9,000."}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 30, stem: "Which expression is equivalent to (9x^3 + 5x + 7) + (6x^3 + 5x^2 - 5)?", images: [], type: "mc", choices: {"A": "15x^6 + 5x^2 - 5x - 35", "B": "15x^3 + 10x^2 + 2", "C": "15x^6 + 5x^2 + 5x + 2", "D": "15x^3 + 5x^2 + 5x + 2"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 31, stem: "The first term of a sequence is 9. Each term after the first is 4 times the preceding term. If w represents the nth term of the sequence, which equation gives w in terms of n?", images: [], type: "mc", choices: {"A": "w = 4(9^n)", "B": "w = 4(9^(n-1))", "C": "w = 9(4^n)", "D": "w = 9(4^(n-1))"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 32, stem: "The function f is defined by f(x) = a(2.2^x + 2.2^b), where a and b are integer constants and 0 < a < b. The functions g and h are equivalent to function f, where k and m are constants. Which of the following equations displays the y-coordinate of the y-intercept of the graph of y = f(x) in the xy-plane as a constant or coefficient?\n\nI. g(x) = a(2.2^x + k)\nII. h(x) = a(2.2)^x + m", images: [], type: "mc", choices: {"A": "I only", "B": "II only", "C": "I and II", "D": "Neither I nor II"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 33, stem: "A physics class is planning an experiment about a toy rocket. The equation y = -16(x - 5.6)^2 + 502 gives the estimated height y, in feet, of the toy rocket x seconds after it is launched into the air. Which of the following is the best interpretation of the vertex of the graph of the equation in the xy-plane?", images: [], type: "mc", choices: {"A": "This toy rocket reaches an estimated maximum height of 502 feet 16 seconds after it is launched into the air.", "B": "This toy rocket reaches an estimated maximum height of 502 feet 5.6 seconds after it is launched into the air.", "C": "This toy rocket reaches an estimated maximum height of 16 feet 502 seconds after it is launched into the air.", "D": "This toy rocket reaches an estimated maximum height of 5.6 feet 502 seconds after it is launched into the air."}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 34, stem: "x - y = 1\nx + y = x^2 - 3\n\nWhich ordered pair is a solution to the system of equations above?", images: [], type: "mc", choices: {"A": "(1 + sqrt(3), sqrt(3))", "B": "(sqrt(3), -sqrt(3))", "C": "(1 + sqrt(5), sqrt(5))", "D": "(sqrt(5), -1 + sqrt(5))"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 35, stem: "What is the y-intercept of the graph shown?\n\n[Figure: A graph in the xy-plane (x-axis from -4 to 4, y-axis from about -12 to 0) shows an increasing curve (logarithmic-type shape) that rises steeply from around (-1, -11), passes through approximately (0, -5), and then levels off, approaching a horizontal asymptote near y = -4 as x increases toward 4.]", images: [], type: "mc", choices: {"A": "(-1, -9)", "B": "(0, -5)", "C": "(0, -4)", "D": "(0, 0)"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 36, stem: "Which of the following is equivalent to the expression x^4 - x^2 - 6?", images: [], type: "mc", choices: {"A": "(x^2+1)(x^2-6)", "B": "(x^2+2)(x^2-3)", "C": "(x^2+3)(x^2-2)", "D": "(x^2+6)(x^2-1)"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 37, stem: "(2x+5)^2 - (x-2) + 2(x+3)\n\nWhich of the following is equivalent to the expression above?", images: [], type: "mc", choices: {"A": "4x^2+21x+33", "B": "4x^2+21x+29", "C": "4x^2+x+29", "D": "4x^2+x+33"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 38, stem: "Rosa opened a savings account at a bank. The table shows the exponential relationship between the time t, in years, since Rosa opened the account and the total amount n, in dollars, in the account. If Rosa made no additional deposits or withdrawals, which of the following equations best represents the relationship between t and n?\n\n[Figure: A table titled 'Time (years)' and 'Total amount (dollars)' with three rows: (0, 604.00), (1, 606.42), (2, 608.84), showing the exponential growth of a savings account.]", images: [], type: "mc", choices: {"A": "n = (1 + 604)^t", "B": "n = (1 + 0.004)^t", "C": "n = 604(1 + 0.004)^t", "D": "n = 0.004(1 + 604)^t"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 39, stem: "(ax + 3)(5x^2 - bx + 4) = 20x^3 - 9x^2 - 2x + 12\nThe equation above is true for all x, where a and b are constants. What is the value of ab?", images: [], type: "mc", choices: {"A": "18", "B": "20", "C": "24", "D": "40"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 40, stem: "x^2 - 12x + 27 = 0\nHow many distinct real solutions does the given equation have?", images: [], type: "mc", choices: {"A": "Exactly two", "B": "Exactly one", "C": "Zero", "D": "Infinitely many"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 41, stem: "For the exponential function g, the table shows four values of x and their corresponding values of g(x). Which equation defines g?\n\n[Figure: A table with columns x and g(x): rows (-1, 25), (0, 1), (1, 1/25), (2, 1/625).]", images: [], type: "mc", choices: {"A": "g(x) = -25^x", "B": "g(x) = -(1/25)^x", "C": "g(x) = 25^x", "D": "g(x) = (1/25)^x"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 42, stem: "Which of the following expressions is equivalent to x^2 - 5?", images: [], type: "mc", choices: {"A": "(x + sqrt(5))^2", "B": "(x - sqrt(5))^2", "C": "(x + sqrt(5))(x - sqrt(5))", "D": "(x + 5)(x - 1)"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 43, stem: "Which of the following expressions is(are) a factor of 3x^2 + 20x - 63?\nI. x - 9\nII. 3x - 7", images: [], type: "mc", choices: {"A": "I only", "B": "II only", "C": "I and II", "D": "Neither I nor II"}, answer: "B", domain: "Advanced Math", difficulty: "Hard" },
{ num: 44, stem: "If sqrt(x^5)/cbrt(x^4) = x^(a/b) for all positive values of x, what is the value of a/b?", images: [], type: "grid", choices: null, answer: "7/6|1.166|1.167", domain: "Advanced Math", difficulty: "Hard" },
{ num: 45, stem: "The table shows the exponential relationship between the number of years, x, since Hana started training in pole vault, and the estimated height h(x), in meters, of her best pole vault for that year. Which of the following functions best represents this relationship, where x <= 4?\n\n[Figure: A table with columns x and h(x): rows (0, 1.23), (2, 1.54), (4, 1.94).]", images: [], type: "mc", choices: {"A": "h(x) = 1.12(0.23)^x", "B": "h(x) = 1.12(1.23)^x", "C": "h(x) = 1.23(0.12)^x", "D": "h(x) = 1.23(1.12)^x"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 46, stem: "Function f is defined by f(x) = -a^x + b, where a and b are constants. In the xy-plane, the graph of y = f(x) - 12 has a y-intercept at (0, -75/7). The product of a and b is 320/7. What is the value of a?", images: [], type: "grid", choices: null, answer: "20", domain: "Advanced Math", difficulty: "Hard" },
{ num: 47, stem: "f(x) = (x - 44)(x - 46)\nThe function f is defined by the given equation. For what value of x does f(x) reach its minimum?", images: [], type: "mc", choices: {"A": "46", "B": "45", "C": "44", "D": "-1"}, answer: "B", domain: "Advanced Math", difficulty: "Hard" },
{ num: 48, stem: "f(x) = 4,000(0.75)^x\nAn entomologist recommended a program to reduce a certain invasive beetle population in an area. The given function estimates this beetle species' population x years after 2012, where x <= 7. Which of the following is the best interpretation of 4,000 in this context?", images: [], type: "mc", choices: {"A": "The estimated initial beetle population for this species and area in 2012", "B": "The estimated beetle population for this species and area 7 years after 2012", "C": "The estimated percent decrease in the beetle population for this species and area each year after 2012", "D": "The estimated percent decrease in the beetle population for this species and area every 7 years after 2012"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 49, stem: "The function f(t) = 40,000(2)^(t/790) gives the number of bacteria in a population t minutes after an initial observation. How much time, in minutes, does it take for the number of bacteria in the population to double?", images: [], type: "mc", choices: {"A": "2", "B": "790", "C": "1,580", "D": "40,000"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 50, stem: "Scientists recorded data about the ocean water levels at a certain location over a period of 6 hours. The graph shown models the data, where y = 0 represents sea level. Which table gives values of x and their corresponding values of y based on the model?\n\n[Figure: A graph with x-axis labeled 'Elapsed time (hours)' scaled 0 to 16 (gridlines every 2) and y-axis labeled 'Ocean water level (feet)' scaled 0 down to -16 (gridlines every 2). A U-shaped curve starts at the origin (0,0), decreases to a minimum around (3, -12), then rises back up to (6, 0), where the plotted curve ends.]", images: [], type: "mc", choices: {"A": "x: 0, 0, 3; y: -12, 3, 6", "B": "x: 0, 3, 0; y: 0, 12, -6", "C": "x: 0, 3, 6; y: 0, -12, 0", "D": "x: 0, 12; y: 0, 3"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 51, stem: "|x + 45| = 48\nWhat is the positive solution to the given equation?", images: [], type: "mc", choices: {"A": "3", "B": "48", "C": "93", "D": "96"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 52, stem: "P(t) = 24.8(1.036)^t\nThe function P gives the predicted population, in millions, of a certain country for the period from 1984 to 2018, where t is the number of years after 1984. According to the model, what is the best interpretation of the statement \"P(8) is approximately equal to 32.91\"?", images: [], type: "mc", choices: {"A": "In 1984, the predicted population of this country was approximately 8 million.", "B": "In 1984, the predicted population of this country was approximately 32.91 million.", "C": "8 years after 1984, the predicted population of this country was approximately 32.91 million.", "D": "32.91 years after 1984, the predicted population of this country was approximately 8 million."}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 53, stem: "6r = 7s + t\nThe given equation relates the variables r, s, and t. Which equation correctly expresses s in terms of r and t?", images: [], type: "mc", choices: {"A": "s = 42r - t", "B": "s = 7(6r - t)", "C": "s = (6/7)r - t", "D": "s = (6r - t)/7"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 54, stem: "A company has a newsletter. In January 2018, there were 1,300 customers subscribed to the newsletter. For the next 24 months after January 2018, the total number of customers subscribed to the newsletter each month was 7% greater than the total number subscribed the previous month. Which equation gives the total number of customers, c subscribed to the company's newsletter m months after January 2018, where m <= 24?", images: [], type: "mc", choices: {"A": "c = 1,300(0.07)^m", "B": "c = 1,300(1.07)^m", "C": "c = 1,300(1.7)^m", "D": "c = 1,300(7)^m"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 55, stem: "1/(x^2 + 10x + 25) = 4\nIf x is a solution to the given equation, which of the following is a possible value of x + 5?", images: [], type: "mc", choices: {"A": "1/2", "B": "5/2", "C": "9/2", "D": "11/2"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 56, stem: "The function f is defined by f(x) = 4 + sqrt(x). What is the value of f(144)?", images: [], type: "mc", choices: {"A": "0", "B": "16", "C": "40", "D": "76"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 57, stem: "sqrt(k - x) = 58 - x\n\nIn the given equation, k is a constant. The equation has exactly one real solution. What is the minimum possible value of 4k?", images: [], type: "grid", choices: null, answer: "231", domain: "Advanced Math", difficulty: "Hard" },
{ num: 58, stem: "f(x) = (x - 1)(x + 3)(x - 2)\n\nIn the xy-plane, when the graph of the function f, where y = f(x), is shifted up 6 units, the resulting graph is defined by the function g. If the graph of y = g(x) crosses through the point (4, b), where b is a constant, what is the value of b?", images: [], type: "grid", choices: null, answer: "48", domain: "Advanced Math", difficulty: "Hard" },
{ num: 59, stem: "The function g is defined by g(x) = sqrt(8x + 1). What is the value of g(3)?", images: [], type: "mc", choices: {"A": "5/8", "B": "25/8", "C": "5", "D": "25"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 60, stem: "Which of the following expressions is equivalent to 8x^10 - 8x^9 + 88x?", images: [], type: "mc", choices: {"A": "x(7x^10 - 7x^9 + 87x)", "B": "x(8^10 - 8^9 + 88)", "C": "8x(x^10 - x^9 + 11x)", "D": "8x(x^9 - x^8 + 11)"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 61, stem: "A rectangular volleyball court has an area of 162 square meters. If the length of the court is twice the width, what is the width of the court, in meters?", images: [], type: "mc", choices: {"A": "9", "B": "18", "C": "27", "D": "54"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 62, stem: "A machine launches a softball from ground level. The softball reaches a maximum height of 51.84 meters above the ground at 1.8 seconds and hits the ground at 3.6 seconds. Which equation represents the height above ground h, in meters, of the softball t seconds after it is launched?", images: [], type: "mc", choices: {"A": "h = -t^2 + 3.6", "B": "h = -t^2 + 51.84", "C": "h = -16(t - 1.8)^2 - 3.6", "D": "h = -16(t - 1.8)^2 + 51.84"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 63, stem: "The function f is defined by f(x) = a^x + b, where a and b are constants. In the xy-plane, the graph of y = f(x) has an x-intercept at (2, 0) and a y-intercept at (0, -323). What is the value of b?", images: [], type: "grid", choices: null, answer: "-324", domain: "Advanced Math", difficulty: "Hard" },
{ num: 64, stem: "For the exponential function f, the value of f(0) is c, where c is a constant. Of the following equations that define the function f, which equation shows the value of c as the coefficient or the base?", images: [], type: "mc", choices: {"A": "f(x) = 22(1.5)^(x+1)", "B": "f(x) = 33(1.5)^x", "C": "f(x) = 49.5(1.5)^(x-1)", "D": "f(x) = 74.25(1.5)^(x-2)"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 65, stem: "S(n) = 38,000a^n\n\nThe function S above models the annual salary, in dollars, of an employee n years after starting a job, where a is a constant. If the employee's salary increases by 4% each year, what is the value of a?", images: [], type: "mc", choices: {"A": "0.04", "B": "0.4", "C": "1.04", "D": "1.4"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 66, stem: "During a 5-second time interval, the average acceleration a, in meters per second squared, of an object with an initial velocity of 12 meters per second is defined by the equation a = (v_f - 12)/5, where v_f is the final velocity of the object in meters per second. If the equation is rewritten in the form v_f = xa + y, where x and y are constants, what is the value of x?", images: [], type: "grid", choices: null, answer: "5", domain: "Advanced Math", difficulty: "Hard" },
{ num: 67, stem: "The expression 90y^5 - 54y^4 is equivalent to ry^4(15y - 9), where r is a constant. What is the value of r?", images: [], type: "grid", choices: null, answer: "6", domain: "Advanced Math", difficulty: "Medium" },
{ num: 68, stem: "f(x) = -500x^2 + 25,000x\n\nThe revenue f(x), in dollars, that a company receives from sales of a product is given by the function f above, where x is the unit price, in dollars, of the product. The graph of y = f(x) in the xy-plane intersects the x-axis at 0 and a. What does a represent?", images: [], type: "mc", choices: {"A": "The revenue, in dollars, when the unit price of the product is $0", "B": "The unit price, in dollars, of the product that will result in maximum revenue", "C": "The unit price, in dollars, of the product that will result in a revenue of $0", "D": "The maximum revenue, in dollars, that the company can make"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 69, stem: "f(x) = 3,000(0.75)^x\n\nA conservation scientist implemented a program to reduce the population of a certain species in an area. The given function estimates this species' population x years after 2008, where x ≤ 8. Which of the following is the best interpretation of 3,000 in this context?", images: [], type: "mc", choices: {"A": "The estimated percent decrease in the population for this species and area every 8 years after 2008", "B": "The estimated percent decrease in the population for this species and area each year after 2008", "C": "The estimated population for this species and area 8 years after 2008", "D": "The estimated initial population for this species and area in 2008"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 70, stem: "2/(x-2) + 3/(x+5) = (rx+t)/((x-2)(x+5))\n\nThe equation above is true for all x > 2, where r and t are positive constants. What is the value of rt?", images: [], type: "mc", choices: {"A": "-20", "B": "15", "C": "20", "D": "60"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 71, stem: "Which expression is equivalent to 6x + 5x + 4y?", images: [], type: "mc", choices: {"A": "15x", "B": "15y", "C": "11x + 4y", "D": "30x + 4y"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 72, stem: "Which of the following is an equivalent form of (1.5x - 2.4)^2 - (5.2x^2 - 6.4)?", images: [], type: "mc", choices: {"A": "-2.2x^2 + 1.6", "B": "-2.2x^2 + 11.2", "C": "-2.95x^2 - 7.2x + 12.16", "D": "-2.95x^2 - 7.2x + 0.64"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 73, stem: "Growth of a Culture of Bacteria\n\nA culture of bacteria is growing at an exponential rate, as shown in the table above. At this rate, on which day would the number of bacteria per milliliter reach 5.12*10^9?\n\n[Figure: Table titled 'Growth of a Culture of Bacteria' with two columns: 'Day' and 'Number of bacteria per milliliter at end of day'. Row 1: Day 1, 2.5*10^5. Row 2: Day 2, 5.0*10^5. Row 3: Day 3, 1.0*10^6. The data shows the bacteria count doubling each day (exponential growth).]", images: [], type: "mc", choices: {"A": "Day 5", "B": "Day 9", "C": "Day 11", "D": "Day 12"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 74, stem: "Which expression is equivalent to (8yz)(y)(7z)?", images: [], type: "mc", choices: {"A": "56y^2z^2", "B": "56y^2z", "C": "56yz", "D": "16yz"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 75, stem: "2x^2 - 8x - 7 = 0\n\nOne solution to the given equation can be written as (8 - sqrtk)/4, where k is a constant. What is the value of k?", images: [], type: "grid", choices: null, answer: "120", domain: "Advanced Math", difficulty: "Hard" },
{ num: 76, stem: "D = 5,640(1.9)^t\n\nThe equation above estimates the global data traffic D, in terabytes, for the year that is t years after 2010. What is the best interpretation of the number 5,640 in this context?", images: [], type: "mc", choices: {"A": "The estimated amount of increase of data traffic, in terabytes, each year", "B": "The estimated percent increase in the data traffic, in terabytes, each year", "C": "The estimated data traffic, in terabytes, for the year that is t years after 2010", "D": "The estimated data traffic, in terabytes, in 2010"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 77, stem: "y = 76\ny = x^2 - 5\nThe graphs of the given equations in the xy-plane intersect at the point (x, y). What is a possible value of x?", images: [], type: "mc", choices: {"A": "-76/5", "B": "-9", "C": "5", "D": "76"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 78, stem: "7m = 5(n + p)\nThe given equation relates the positive numbers m, n, and p. Which equation correctly gives n in terms of m and p?", images: [], type: "mc", choices: {"A": "n = 5p/(7m)", "B": "n = 7m/5 - p", "C": "n = 5(7m) + p", "D": "n = 7m - 5 - p"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 79, stem: "fifth-root(70n) * (sixth-root(70n))^2\nFor what value of x is the given expression equivalent to (70n)^(30x), where n > 1?", images: [], type: "grid", choices: null, answer: "4/225|.0177|.0178", domain: "Advanced Math", difficulty: "Hard" },
{ num: 80, stem: "2x^2 - 2 = 2x + 3\nWhich of the following is a solution to the equation above?", images: [], type: "mc", choices: {"A": "2", "B": "1 - sqrt(11)", "C": "1/2 + sqrt(11)", "D": "(1 + sqrt(11))/2"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 81, stem: "f(x) = ax^2 + 4x + c\nIn the given quadratic function, a and c are constants. The graph of y = f(x) in the xy-plane is a parabola that opens upward and has a vertex at the point (h, k), where h and k are constants. If k < 0 and f(-9) = f(3), which of the following must be true?\nI. c < 0\nII. a >= 1", images: [], type: "mc", choices: {"A": "I only", "B": "II only", "C": "I and II", "D": "Neither I nor II"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 82, stem: "The x-intercept of the graph shown is (x, 0). What is the value of x?\n\n[Figure: An upward-opening parabola on an xy-plane with axes labeled x (0 to 12, gridlines every 2) and y (-2 to 10, gridlines every 2). The vertex of the parabola sits on the x-axis at approximately (7,0), meaning the parabola just touches the x-axis at a single point (a double root). The curve passes through marked points (6,3) and (8,3), symmetric about x = 7, and rises steeply on both sides toward y = 10 near x = 5.5 and x = 8.5.]", images: [], type: "grid", choices: null, answer: "7", domain: "Advanced Math", difficulty: "Easy" },
{ num: 83, stem: "x^2 = -841\nHow many distinct real solutions does the given equation have?", images: [], type: "mc", choices: {"A": "Exactly one", "B": "Exactly two", "C": "Infinitely many", "D": "Zero"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 84, stem: "In the xy-plane, a line with equation 2y = c for some constant c intersects a parabola at exactly one point. If the parabola has equation y = -2x^2 + 9x, what is the value of c?", images: [], type: "grid", choices: null, answer: "81/4|20.25", domain: "Advanced Math", difficulty: "Hard" },
{ num: 85, stem: "Which of the following could be the equation of the graph shown in the xy-plane?\n\n[Figure: A degree-4 polynomial graph on an xy-plane with x-axis from -8 to 8 and y-axis from -100 to 100 (gridlines every 20). The curve descends from a very negative y-value at the far left (below -100 near x = -8), rises and touches (bounces off, does not cross) the x-axis at approximately x = -5, dips only slightly negative and rises to cross the x-axis at x = 0, continues up to a local maximum of about y = 20 near x = 2-3, then turns downward, crosses the x-axis again near x = 4, and plunges steeply to below -100 as x approaches 6-7. X-intercepts are at x = -5 (touch/even multiplicity), x = 0, and x = 4 (cross).]", images: [], type: "mc", choices: {"A": "y = -1/10 x(x-4)(x+5)", "B": "y = -1/10 x(x-4)(x+5)^2", "C": "y = -1/10 x(x-5)(x+4)", "D": "y = -1/10 x(x-5)^2(x+4)"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 86, stem: "P(t) = 260(1.04)^((6/4)t)\nThe function P models the population, in thousands, of a certain city t years after 2003. According to the model, the population is predicted to increase by 4% every n months. What is the value of n?", images: [], type: "mc", choices: {"A": "8", "B": "12", "C": "18", "D": "72"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 87, stem: "y = 5x + 4\ny = 5x^2 + 4\nWhich ordered pair (x, y) is a solution to the given system of equations?", images: [], type: "mc", choices: {"A": "(0, 0)", "B": "(0, 4)", "C": "(8, 44)", "D": "(8, 84)"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 88, stem: "(d - 30)(d + 30) - 7 = -7\nWhat is a solution to the given equation?", images: [], type: "grid", choices: null, answer: "30|-30", domain: "Advanced Math", difficulty: "Medium" },
{ num: 89, stem: "f(x) = 4x^2 + 64x + 262\nThe function g is defined by g(x) = f(x + 5). For what value of x does g(x) reach its minimum?", images: [], type: "mc", choices: {"A": "-13", "B": "-8", "C": "-5", "D": "-3"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 90, stem: "The graph of y = f(x) is shown, where the function f is defined by f(x) = ax^3 + bx^2 + cx + d and a, b, c, and d are constants. For how many values of x does f(x) = 0?\n\n[Figure: A cubic curve on an xy-plane with x-axis from -8 to 8 and y-axis from -16 to 16 (gridlines every 2). The curve descends steeply from the top left, crosses the x-axis near x = -1, continues down to a local minimum of about y = -6 near x = 1, rises back up crossing the x-axis a second time near x = 2, continues to a local maximum of about y = 2 near x = 5, then turns down and crosses the x-axis a third time near x = 7, continuing to decrease. Three distinct x-axis crossings are visible.]", images: [], type: "mc", choices: {"A": "One", "B": "Two", "C": "Three", "D": "Four"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 91, stem: "Which expression is equivalent to 11x^3 - 5x^3?", images: [], type: "mc", choices: {"A": "16x^3", "B": "6x^3", "C": "6x^6", "D": "16x^6"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 92, stem: "Which expression is equivalent to 50x^2 + 5x^2?", images: [], type: "mc", choices: {"A": "250x^2", "B": "10x^2", "C": "45x^2", "D": "55x^2"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 93, stem: "Table:\nx | y\n0 | 0\n1 | 1\n2 | 8\n3 | 27\nThe table shown includes some values of x and their corresponding values of y. Which of the following graphs in the xy-plane could represent the relationship between x and y?\n\n[Figure: A data table lists x = 0,1,2,3 with corresponding y = 0,1,8,27 (i.e., y = x^3). Below it are four small candidate graphs (A-D), each plotted on axes from -4 to 4, showing cubic-like S-curves through the origin with varying steepness/shift. Only choice B's curve passes through both (0,0) and (1,1) as required by the table.]", images: [], type: "mc", choices: {"A": "Small graph (axes -4 to 4) showing an S-shaped curve through the origin, but not passing through (1,1); curve is shallower/shifted so it misses the table points.", "B": "Small graph (axes -4 to 4) showing an S-shaped (cubic, y = x^3-like) curve passing through the origin and through (1,1), rising steeply for x > 1 and falling steeply (toward negative y) for x < 0 - matches all table points.", "C": "Small graph (axes -4 to 4) showing an S-shaped curve through the origin but flatter near the origin, not passing through (1,1).", "D": "Small graph (axes -4 to 4) showing a steep S-shaped curve through the origin, but not passing through (1,1) (curve is too steep/shifted)."}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 94, stem: "The expression (3x - 23)(19x + 6) is equivalent to the expression ax^2 + bx + c, where a, b, and c are constants. What is the value of b?", images: [], type: "grid", choices: null, answer: "-419", domain: "Advanced Math", difficulty: "Hard" },
{ num: 95, stem: "The graph of y = 2x^2 + bx + c is shown, where b and c are constants. What is the value of bc?\n\n[Figure: Upward-opening parabola on an xy-grid (x-axis roughly -6 to 4, y-axis roughly -10 to 4). The vertex is at (-1, -8), and the curve passes through the y-intercept (0, -6). The parabola is fairly narrow, rising steeply on both sides of the vertex, with labeled points at (-1,-8) and (0,-6).]", images: [], type: "grid", choices: null, answer: "-24", domain: "Advanced Math", difficulty: "Hard" },
{ num: 96, stem: "(x - 47)^2 = 1. What is the sum of the solutions to the given equation?", images: [], type: "grid", choices: null, answer: "94", domain: "Advanced Math", difficulty: "Hard" },
{ num: 97, stem: "The graph models the number of active projects a company was working on x months after the end of November 2012, where 0 ≤ x ≤ 6. According to the model, what is the predicted number of active projects the company was working on at the end of November 2012?\n\n[Figure: A smooth, concave-down curve on a graph with x-axis (months) from 0 to 6 and y-axis (active projects) from 0 to 13. The curve starts at (0,5), rises steadily and increasingly to a maximum near (4,9), then decreases slightly to about (6,8). Represents active projects over time after November 2012.]", images: [], type: "mc", choices: {"A": "0", "B": "5", "C": "8", "D": "9"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 98, stem: "Which expression is equivalent to 20w - (4w + 3w)?", images: [], type: "mc", choices: {"A": "10w", "B": "13w", "C": "19w", "D": "21w"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 99, stem: "Which expression is equivalent to 4/(4x-5) - 1/(x+1)?", images: [], type: "mc", choices: {"A": "1/((x+1)(4x-5))", "B": "3/(3x-6)", "C": "-1/((x+1)(4x-5))", "D": "9/((x+1)(4x-5))"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 100, stem: "The function f is defined by f(x) = (x-6)(x-2)(x+6). In the xy-plane, the graph of y = g(x) is the result of translating the graph of y = f(x) up 4 units. What is the value of g(0)?", images: [], type: "grid", choices: null, answer: "76", domain: "Advanced Math", difficulty: "Hard" },
{ num: 101, stem: "g(x) = (x^2 - x - a)/(x^3 - x - b). The function g is defined by the given equation, where a and b are constants. In the xy-plane, the graph of y = g(x) passes through the point (0, 22), and g(-22) = 0. What is the value of b?", images: [], type: "mc", choices: {"A": "23", "B": "22", "C": "-22", "D": "-23"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 102, stem: "Which of the following is equivalent to 3(x+5) - 6?", images: [], type: "mc", choices: {"A": "3x - 3", "B": "3x - 1", "C": "3x + 9", "D": "15x - 6"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 103, stem: "The graph of a system of a linear equation and a nonlinear equation is shown. What is the solution (x, y) to this system?\n\n[Figure: xy-plane graph, x-axis from -2 to 9, y-axis from -2 to 9. A straight line with positive slope runs from about (-2,1) through (2,4) up to about (9,9). A curved, exponential-like function starts around (-2,3), stays relatively flat through low x-values, passes through the same intersection point (2,4) as the line, then rises very steeply after about x=3, exiting the top of the graph near x=4.5-5. The two graphs intersect at the single labeled point (2,4).]", images: [], type: "mc", choices: {"A": "(0, 0)", "B": "(0, 2)", "C": "(2, 4)", "D": "(4, 0)"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 104, stem: "(x-4)(x+2)(x-1) = 0. What is the product of the solutions to the given equation?", images: [], type: "mc", choices: {"A": "8", "B": "3", "C": "-3", "D": "-8"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 105, stem: "(x^2 - c)/(x - b). In the expression above, b and c are positive integers. If the expression is equivalent to x + b and x ≠ b, which of the following could be the value of c?", images: [], type: "mc", choices: {"A": "4", "B": "6", "C": "8", "D": "10"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 106, stem: "2(x+1)/(x+5) = 1 - 1/(x+5). What is the solution to the equation above?", images: [], type: "mc", choices: {"A": "0", "B": "2", "C": "3", "D": "5"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 107, stem: "g(x) = (3/5)x + 7/6. h(x) = 6x - 5. The functions g and h are defined by the equations shown. Which expression is equivalent to g(x) · h(x)?", images: [], type: "mc", choices: {"A": "18x^2/5 - 35/6", "B": "18x^2/5 + 27x/11 - 35/6", "C": "18x^2/5 - 4x - 35/6", "D": "18x^2/5 + 4x - 35/6"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 108, stem: "There are 240 players in a tennis competition that includes 4 rounds of matches. Each player in the competition will play a match against another player in round 1. At the end of each round, the player who loses the match is eliminated and the player who won the match advances to the next round to play a match against another winning player. Which equation gives the number of players, p, eliminated at the end of round r, where r ≤ 4?", images: [], type: "mc", choices: {"A": "p = 15(1/2)^r", "B": "p = 15(2)^r", "C": "p = 240(1/2)^r", "D": "p = 240(2)^r"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 109, stem: "A rectangle has a length of x units and a width of (x - 15) units. If the rectangle has an area of 76 square units, what is the value of x?", images: [], type: "mc", choices: {"A": "4", "B": "19", "C": "23", "D": "76"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 110, stem: "A scientist initially measures 12,000 bacteria in a growth medium. 4 hours later, the scientist measures 24,000 bacteria. Assuming exponential growth, the formula P = C(2)^(rt) gives the number of bacteria in the growth medium, where r and C are constants and P is the number of bacteria t hours after the initial measurement. What is the value of r?", images: [], type: "mc", choices: {"A": "1/12,000", "B": "1/4", "C": "4", "D": "12,000"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 111, stem: "sqrt((x-2)^2) = sqrt(3x+34). What is the smallest solution to the given equation?", images: [], type: "grid", choices: null, answer: "-3", domain: "Advanced Math", difficulty: "Hard" },
{ num: 112, stem: "y = x^2 - 4x + 4. y = 4 - x. If the ordered pair (x, y) satisfies the system of equations above, what is one possible value of x?", images: [], type: "grid", choices: null, answer: "0|3", domain: "Advanced Math", difficulty: "Medium" },
{ num: 113, stem: "x^2 + y + 10 = 10. 8x + 16 - y = 0. The solution to the given system of equations is (x, y). What is the value of x?", images: [], type: "mc", choices: {"A": "-16", "B": "-4", "C": "2", "D": "8"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 114, stem: "A quadratic function models a projectile's height, in meters, above the ground in terms of the time, in seconds, after it was launched. The model estimates that the projectile was launched from an initial height of 7 meters above the ground and reached a maximum height of 51.1 meters above the ground 3 seconds after the launch. How many seconds after the launch does the model estimate that the projectile will return to a height of 7 meters?", images: [], type: "mc", choices: {"A": "3", "B": "6", "C": "7", "D": "9"}, answer: "B", domain: "Advanced Math", difficulty: "Hard" },
{ num: 115, stem: "y = x^2 - 14x + 22\n\nThe given equation relates the variables x and y. For what value of x does the value of y reach its minimum?", images: [], type: "grid", choices: null, answer: "7", domain: "Advanced Math", difficulty: "Hard" },
{ num: 116, stem: "∛(x^3 y^6)\n\nWhich of the following expressions is equivalent to the expression above?", images: [], type: "mc", choices: {"A": "y^2", "B": "xy^2", "C": "y^3", "D": "xy^3"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 117, stem: "Which expression is equivalent to (d - 6)(8d^2 - 3)?", images: [], type: "mc", choices: {"A": "8d^3 - 14d^2 - 3d + 18", "B": "8d^3 - 17d^2 + 48", "C": "8d^3 - 48d^2 - 3d + 18", "D": "8d^3 - 51d^2 + 48"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 118, stem: "An oceanographer uses the equation s = (3/2)p to model the speed s, in knots, of an ocean wave, where p represents the period of the wave, in seconds. Which of the following represents the period of the wave in terms of the speed of the wave?", images: [], type: "mc", choices: {"A": "p = (2/3)s", "B": "p = (3/2)s", "C": "p = 2/3 + s", "D": "p = 3/2 + s"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 119, stem: "If 4sqrt(2x) = 16, what is the value of 6x?", images: [], type: "mc", choices: {"A": "24", "B": "48", "C": "72", "D": "96"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 120, stem: "The function f is defined by f(x) = 1/(6x). What is the value of f(x) when x = 3?", images: [], type: "mc", choices: {"A": "1/3", "B": "1/6", "C": "1/9", "D": "1/18"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 121, stem: "If x^2 = a + b and y^2 = a + c, which of the following is equal to (x^2 - y^2)^2?", images: [], type: "mc", choices: {"A": "a^2 - 2ac + c^2", "B": "b^2 - 2bc + c^2", "C": "4a^2 - 4abc + c^2", "D": "4a^2 - 2abc + b^2c^2"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 122, stem: "f(x) = x^5 + 9x + 17\n\nFor the given function f, the graph of y = f(x) in the xy-plane passes through the point (0, b), where b is a constant. What is the value of b?", images: [], type: "grid", choices: null, answer: "17", domain: "Advanced Math", difficulty: "Medium" },
{ num: 123, stem: "Which of the following is a solution to the equation 2x^2 - 4 = x^2?", images: [], type: "mc", choices: {"A": "1", "B": "2", "C": "3", "D": "4"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 124, stem: "If a = 4k + 5r and b = 7k - 12r + 3, which expression is equivalent to a - b?", images: [], type: "mc", choices: {"A": "-3k + 17r + 3", "B": "-3k + 17r - 3", "C": "-3k - 7r - 3", "D": "-3k - 7r + 3"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 125, stem: "q - 29r = s\n\nThe given equation relates the positive numbers q, r, and s. Which equation correctly expresses q in terms of r and s?", images: [], type: "mc", choices: {"A": "q = s - 29r", "B": "q = s + 29r", "C": "q = 29rs", "D": "q = -s/(29r)"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 126, stem: "A park ranger hung squirrel houses each in the shape of a right rectangular prism for fox squirrels. Each house has a height of 11 inches. The length of each house's base is x inches, which is 1 inch more than the width of the house's base. Which function V gives the volume of each house, in cubic inches, in terms of the length of the house's base?", images: [], type: "mc", choices: {"A": "V(x) = 11x(x - 1)", "B": "V(x) = 11x(x + 1)", "C": "V(x) = x(x + 11)(x - 1)", "D": "V(x) = x(x + 11)(x + 1)"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 127, stem: "57x^2 + (57b + a)x + ab = 0\n\nIn the given equation, a and b are positive constants. The product of the solutions to the given equation is kab, where k is a constant. What is the value of k?", images: [], type: "mc", choices: {"A": "1/57", "B": "1/19", "C": "1", "D": "57"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 128, stem: "-x^2 + bx - 676 = 0\n\nIn the given equation, b is a positive integer. The equation has no real solution. What is the greatest possible value of b?", images: [], type: "grid", choices: null, answer: "51", domain: "Advanced Math", difficulty: "Hard" },
{ num: 129, stem: "Function f is defined by f(x) = -a^x + b, where a and b are constants. In the xy-plane, the graph of y = f(x) - 15 has a y-intercept at (0, -99/7). The product of a and b is 65/7. What is the value of a?", images: [], type: "grid", choices: null, answer: "5", domain: "Advanced Math", difficulty: "Hard" },
{ num: 130, stem: "p = k/(4j + 9)\n\nThe given equation relates the distinct positive numbers p, k, and j. Which equation correctly expresses 4j + 9 in terms of p and k?", images: [], type: "mc", choices: {"A": "4j + 9 = k/p", "B": "4j + 9 = kp", "C": "4j + 9 = k - p", "D": "4j + 9 = p/k"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 131, stem: "If x ≠ 0, which of the following expressions is equivalent to sqrt(16x^4y^8) / x^3?", images: [], type: "mc", choices: {"A": "8x^2y^4", "B": "4xy^4", "C": "4x^-2y^2", "D": "4x^-1y^4"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 132, stem: "The function g is defined by g(x) = (x + 14)(t - x), where t is a constant. In the xy-plane, the graph of y = g(x) passes through the point (24, 0). What is the value of g(0)?", images: [], type: "grid", choices: null, answer: "336", domain: "Advanced Math", difficulty: "Hard" },
{ num: 133, stem: "g(x) = x^2 + 55\n\nWhat is the minimum value of the given function?", images: [], type: "mc", choices: {"A": "0", "B": "55", "C": "110", "D": "3,025"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 134, stem: "The area of a rectangular banner is 2,661 square inches. The banner's length x, in inches, is 24 inches longer than its width, in inches. Which equation represents this situation?", images: [], type: "mc", choices: {"A": "0 = x^2 - 24x - 2,661", "B": "0 = x^2 - 24x + 2,661", "C": "0 = x^2 + 24x - 2,661", "D": "0 = x^2 + 24x + 2,661"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 135, stem: "f(x) = (x - 14)(x + 19). The function f is defined by the given equation. For what value of x does f(x) reach its minimum?", images: [], type: "mc", choices: {"A": "-266", "B": "-19", "C": "-33/2", "D": "-5/2"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 136, stem: "If 3x^2 - 18x - 15 = 0, what is the value of x^2 - 6x?", images: [], type: "grid", choices: null, answer: "5", domain: "Advanced Math", difficulty: "Hard" },
{ num: 137, stem: "In the xy-plane, what is the y-coordinate of the point of intersection of the graphs of y = (x - 1)^2 and y = 2x - 3?", images: [], type: "grid", choices: null, answer: "1", domain: "Advanced Math", difficulty: "Medium" },
{ num: 138, stem: "A sample of a certain isotope takes 29 years to decay to half its original mass. The function s(t) = 184(0.5)^(t/29) gives the approximate mass of this isotope, in grams, that remains t years after a 184-gram sample starts to decay. Which statement is the best interpretation of s(87) = 23 in this context?", images: [], type: "mc", choices: {"A": "Approximately 23 grams of the sample remains 87 years after the sample starts to decay.", "B": "The mass of the sample has decreased by approximately 23 grams 87 years after the sample starts to decay.", "C": "The mass of the sample has decreased by approximately 87 grams 23 years after the sample starts to decay.", "D": "Approximately 87 grams of the sample remains 23 years after the sample starts to decay."}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 139, stem: "y + k = x + 26\ny - k = x^2 - 5x\nIn the given system of equations, k is a constant. The system has exactly one distinct real solution. What is the value of k?", images: [], type: "grid", choices: null, answer: "17.5|35/2", domain: "Advanced Math", difficulty: "Hard" },
{ num: 140, stem: "The functions f and g are defined by the given equations.\nf(x) = 3 + |-2x - x^2|\ng(w) = |-w/(w-1)| - w + 5\nIf f(-4) = c, where c is a constant, what is the value of g(c)?", images: [], type: "grid", choices: null, answer: "-4.9|-49/10", domain: "Advanced Math", difficulty: "Hard" },
{ num: 141, stem: "Which quadratic equation has no real solutions?", images: [], type: "mc", choices: {"A": "x^2 + 14x - 49 = 0", "B": "x^2 - 14x + 49 = 0", "C": "5x^2 - 14x - 49 = 0", "D": "5x^2 - 14x + 49 = 0"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 142, stem: "What is the y-intercept of the graph shown?\n\n[Figure: An exponential growth curve plotted on an xy-plane with gridlines from x = -5 to 5 and y = 0 to 10. The curve is near-flat and close to the x-axis for negative x (e.g., near y=0 around x=-5), rises gradually, crosses the y-axis at (0,2), and then increases steeply, passing through roughly (2,10) as x approaches 2-3. The curve has no visible x-intercept (approaches y=0 asymptotically as x decreases).]", images: [], type: "mc", choices: {"A": "(0, 0)", "B": "(0, 2)", "C": "(2, 0)", "D": "(2, 2)"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 143, stem: "5|x| = 45. What is the positive solution to the given equation?", images: [], type: "grid", choices: null, answer: "9", domain: "Advanced Math", difficulty: "Easy" },
{ num: 144, stem: "2x^2 - 4x = t. In the equation above, t is a constant. If the equation has no real solutions, which of the following could be the value of t?", images: [], type: "mc", choices: {"A": "-3", "B": "-1", "C": "1", "D": "3"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 145, stem: "P(t) = 1,800(1.02)^t. The function P gives the estimated number of marine mammals in a certain area, where t is the number of years since a study began. What is the best interpretation of P(0) = 1,800 in this context?", images: [], type: "mc", choices: {"A": "The estimated number of marine mammals in the area was 102 when the study began.", "B": "The estimated number of marine mammals in the area was 1,800 when the study began.", "C": "The estimated number of marine mammals in the area increased by 102 each year during the study.", "D": "The estimated number of marine mammals in the area increased by 1,800 each year during the study."}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 146, stem: "What is the x-intercept of the graph shown?\n\n[Figure: A parabola opening upward drawn on an xy-plane with gridlines from x=0 to 10 and y=0 to 10 (first-quadrant view). The vertex touches the x-axis at approximately (4,0) - the single x-intercept - and the curve rises steeply on both sides, exiting the top of the visible grid near x≈2.5 and x≈5.5 at y=10.]", images: [], type: "mc", choices: {"A": "(-5, 0)", "B": "(5, 0)", "C": "(-4, 0)", "D": "(4, 0)"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 147, stem: "q(x) = 32(2^x). Which table gives three values of x and their corresponding values of q(x) for function q?", images: [], type: "mc", choices: {"A": "x: -1, 0, 1 → q(x): -64, 0, 64", "B": "x: -1, 0, 1 → q(x): 1/16, 2, 64", "C": "x: -1, 0, 1 → q(x): 1/16, 32, 64", "D": "x: -1, 0, 1 → q(x): 16, 32, 64"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 148, stem: "14j + 5k = m. The given equation relates the numbers j, k, and m. Which equation correctly expresses k in terms of j and m?", images: [], type: "mc", choices: {"A": "k = (m - 14j)/5", "B": "k = (1/5)m - 14j", "C": "k = (14j - m)/5", "D": "k = 5m - 14j"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 149, stem: "f(x) = (x + 6)(x - 4). If the given function f is graphed in the xy-plane, where y = f(x), what is the x-coordinate of an x-intercept of the graph?", images: [], type: "grid", choices: null, answer: "-6|4", domain: "Advanced Math", difficulty: "Medium" },
{ num: 150, stem: "The solutions to x^2 + 6x + 7 = 0 are r and s, where r < s. The solutions to x^2 + 8x + 8 = 0 are t and u, where t < u. The solutions to x^2 + 14x + c = 0, where c is a constant, are r+t and s+u. What is the value of c?", images: [], type: "grid", choices: null, answer: "31", domain: "Advanced Math", difficulty: "Hard" },
{ num: 151, stem: "Which expression is equivalent to 23x^3 + 2x^2 + 9x?", images: [], type: "mc", choices: {"A": "23x(x^2 + 2x + 9)", "B": "9x(23x^3 + 2x^2 + 1)", "C": "x(23x^2 + 2x + 9)", "D": "34(x^3 + x^2 + x)"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 152, stem: "x(kx - 56) = -16. In the given equation, k is an integer constant. If the equation has no real solution, what is the least possible value of k?", images: [], type: "grid", choices: null, answer: "50", domain: "Advanced Math", difficulty: "Hard" },
{ num: 153, stem: "5(x + 7) = 15(x - 17)(x + 7). What is the sum of the solutions to the given equation?", images: [], type: "grid", choices: null, answer: "10.33|31/3", domain: "Advanced Math", difficulty: "Hard" },
{ num: 154, stem: "At the time of posting a video, a social media channel had 53 subscribers. Each day for five days after the video was posted, the number of subscribers doubled from the number the previous day. Which equation gives the total number of subscribers, n, to the channel d days after the video was posted?", images: [], type: "mc", choices: {"A": "n = (53)^d", "B": "n = 53(2)^d", "C": "n = 53(1/2)^d", "D": "n = (53)^2 + d"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 155, stem: "The function f is defined by f(x) = 4x^-1. What is the value of f(21)?", images: [], type: "mc", choices: {"A": "-84", "B": "1/84", "C": "4/21", "D": "21/4"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 156, stem: "(x + 2)(x - 5)(x + 9) = 0. What is a positive solution to the given equation?", images: [], type: "mc", choices: {"A": "3", "B": "4", "C": "5", "D": "18"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 157, stem: "-2x^2 + 20x + c = 0. In the given equation, c is a constant. The equation has exactly one solution. What is the value of c?", images: [], type: "mc", choices: {"A": "-68", "B": "-50", "C": "-32", "D": "0"}, answer: "B", domain: "Advanced Math", difficulty: "Hard" },
{ num: 158, stem: "-4x^2 - 7x = -36. What is the positive solution to the given equation?", images: [], type: "mc", choices: {"A": "7/4", "B": "9/4", "C": "4", "D": "7"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 159, stem: "Which expression is equivalent to 19(x^2 - 7)?", images: [], type: "mc", choices: {"A": "19x^2 - 133", "B": "19x^2 - 26", "C": "19x^2 - 7", "D": "19x^2 + 12"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 160, stem: "Immanuel purchased a certain rare coin on January 1. The function f(x) = 65(1.03)^x, where 0 ≤ x ≤ 10, gives the predicted value, in dollars, of the rare coin x years after Immanuel purchased it. What is the best interpretation of the statement \"f(8) is approximately equal to 82\" in this context?", images: [], type: "mc", choices: {"A": "When the rare coin's predicted value is approximately 82 dollars, it is 8% greater than the predicted value, in dollars, on January 1 of the previous year.", "B": "When the rare coin's predicted value is approximately 82 dollars, it is 8 times the predicted value, in dollars, on January 1 of the previous year.", "C": "From the day Immanuel purchased the rare coin to 8 years after Immanuel purchased the coin, its predicted value increased by a total of approximately 82 dollars.", "D": "8 years after Immanuel purchased the rare coin, its predicted value is approximately 82 dollars."}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 161, stem: "The function f gives the product of a number, x, and a number that is 91 more than x. Which equation defines f?", images: [], type: "mc", choices: {"A": "f(x) = x^2 + x + 91", "B": "f(x) = x^2 + 91", "C": "f(x) = x^2 + 91x", "D": "f(x) = x^2 + 91x + 91"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 162, stem: "A model estimates that at the end of each year from 2015 to 2020, the number of squirrels in a population was 150% more than the number of squirrels in the population at the end of the previous year. The model estimates that at the end of 2016, there were 180 squirrels in the population. Which of the following equations represents this model, where n is the estimated number of squirrels in the population t years after the end of 2015 and t ≤ 5?", images: [], type: "mc", choices: {"A": "n = 72(1.5)^t", "B": "n = 72(2.5)^t", "C": "n = 180(1.5)^t", "D": "n = 180(2.5)^t"}, answer: "B", domain: "Advanced Math", difficulty: "Hard" },
{ num: 163, stem: "0.36x^2 + 0.63x + 1.17. The given expression can be rewritten as a(4x^2 + 7x + 13), where a is a constant. What is the value of a?", images: [], type: "grid", choices: null, answer: ".09|9/100", domain: "Advanced Math", difficulty: "Hard" },
{ num: 164, stem: "f(x) = |59 - 2x|. The function f is defined by the given equation. For which of the following values of k does f(k) = 3k?", images: [], type: "mc", choices: {"A": "59/5", "B": "59/2", "C": "177/5", "D": "59"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 165, stem: "14x/(7y) = 2sqrt(w + 19). The given equation relates the distinct positive real numbers w, x, and y. Which equation correctly expresses w in terms of x and y?", images: [], type: "mc", choices: {"A": "w = sqrt(x/y) - 19", "B": "w = sqrt(28x/14y) - 19", "C": "w = (x/y)^2 - 19", "D": "w = (28x/14y)^2 - 19"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 166, stem: "x^2 + 6x + 4. Which of the following is equivalent to the expression above?", images: [], type: "mc", choices: {"A": "(x + 3)^2 + 5", "B": "(x + 3)^2 - 5", "C": "(x - 3)^2 + 5", "D": "(x - 3)^2 - 5"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 167, stem: "In the expression 3(2x^2 + px + 8) - 16x(p + 4), p is a constant. This expression is equivalent to the expression 6x^2 - 155x + 24. What is the value of p?", images: [], type: "mc", choices: {"A": "-3", "B": "7", "C": "13", "D": "155"}, answer: "B", domain: "Advanced Math", difficulty: "Hard" },
{ num: 168, stem: "f(t) = 55t - 2t^2. The function f is defined by the given equation. The function g is defined by g(t) = f(t) + 3. Which expression represents the maximum value of g(t)?", images: [], type: "mc", choices: {"A": "3 + (55/2)^2", "B": "3 + 2(55/4)^2", "C": "3 - 2(55/4)^2", "D": "3 - (55/2)^2"}, answer: "B", domain: "Advanced Math", difficulty: "Hard" },
{ num: 169, stem: "(x + 2)(x + 3) = (x - 2)(x - 3) + 10. Which of the following is a solution to the given equation?", images: [], type: "mc", choices: {"A": "1", "B": "0", "C": "-2", "D": "-5"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 170, stem: "y = x^2 + 1.7; y = 1.7 - x. Which graph represents the given system of equations?\n\n[Figure: Four coordinate-plane thumbnails (choices A-D), each on axes from about -7 to 7 on x and -1 to 7 on y, showing a narrow upward-opening parabola and a straight line. Choice A (correct): parabola with vertex at (0, 1.7) opening upward, symmetric about the y-axis; a line with slope -1 crossing the y-axis at (0, 1.7) and decreasing left-to-right, running from upper-left (around (-6,7)) through the vertex region down to lower-right (around (3,-1)); line and parabola cross near x=0 and again near x=1. Choice B: same parabola vertex at (0,1.7), but the line instead has a positive slope, rising left to right through (0, 1.7). Choice C: parabola shifted so vertex is near (-2, 0) (i.e., left-shifted, touching near x=-2 on the x-axis), paired with a decreasing line (slope -1) crossing y-axis near (0,2). Choice D: same left-shifted parabola (vertex near (-2,0)) paired with an increasing line crossing y-axis near (0,2).]", images: [], type: "mc", choices: {"A": "Graph showing an upward-opening parabola with vertex at (0, 1.7) and a straight line with slope -1 passing through the y-axis at (0, 1.7), decreasing from upper left to lower right; the line and parabola intersect near the vertex and again in the first quadrant.", "B": "Graph showing the same upward-opening parabola with vertex at (0, 1.7), but paired with a line that has a POSITIVE slope (increasing left to right) through (0, 1.7) instead of decreasing - represents system with y = 1.7 + x.", "C": "Graph showing an upward-opening parabola shifted left with vertex near (-1.7, 0) instead of (0, 1.7), paired with a decreasing line (slope -1) through y-intercept near (0, 2) - represents system with y = (x+1.7)^2.", "D": "Graph showing an upward-opening parabola shifted left with vertex near (-1.7, 0), paired with an increasing line (positive slope) through y-intercept near (0, 2) - represents system with y = (x+1.7)^2 and y = 1.7 + x."}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 171, stem: "x^2 - ax + 12 = 0. In the equation above, a is a constant and a > 0. If the equation has two integer solutions, what is a possible value of a?", images: [], type: "grid", choices: null, answer: "7|8|13", domain: "Advanced Math", difficulty: "Medium" },
{ num: 172, stem: "h(t) = -16t^2 + b\n\nThe function h estimates an object's height, in feet, above the ground t seconds after the object is dropped, where b is a constant. The function estimates that the object is 3,364 feet above the ground when it is dropped at t = 0. Approximately how many seconds after being dropped does the function estimate the object will hit the ground?", images: [], type: "mc", choices: {"A": "7.25", "B": "14.50", "C": "105.13", "D": "210.25"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 173, stem: "From 2005 through 2014, the number of music CDs sold in the United States declined each year by approximately 15% of the number sold the preceding year. In 2005, approximately 600 million CDs were sold in the United States. Of the following, which best models C, the number of millions of CDs sold in the United States, t years after 2005?", images: [], type: "mc", choices: {"A": "C = 600(0.15)^t", "B": "C = 600(0.85)^t", "C": "C = 600(1.15)^t", "D": "C = 600(1.85)^t"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 174, stem: "sqrt(2x + 6) + 4 = x + 3\n\nWhat is the solution set of the equation above?", images: [], type: "mc", choices: {"A": "{-1}", "B": "{5}", "C": "{-1, 5}", "D": "{0, -1, 5}"}, answer: "B", domain: "Advanced Math", difficulty: "Hard" },
{ num: 175, stem: "The graph of the function f, defined by f(x) = -1/2(x-4)^2 + 10, is shown in the xy-plane above. If the function g (not shown) is defined by g(x) = -x + 10, what is one possible value of a such that f(a) = g(a)?\n\n[Figure: Downward-opening parabola labeled y = f(x) in the xy-plane, x-axis from 0 to 9, y-axis from 0 to 12. Vertex at approximately (4, 10). Curve rises from lower left, peaks at the vertex, and descends to the lower right, passing through roughly (0, 2) and continuing down past (8, 2), consistent with f(x) = -1/2(x-4)^2 + 10.]", images: [], type: "grid", choices: null, answer: "2|8", domain: "Advanced Math", difficulty: "Hard" },
{ num: 176, stem: "The expression 24/(6x+42) is equivalent to 4/(x+b), where b is a constant and x > 0. What is the value of b?", images: [], type: "mc", choices: {"A": "7", "B": "10", "C": "24", "D": "252"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 177, stem: "The graph of y = g(x) is shown. If g(x+28) = (1/10)(x-a)^2(x-b)^2(x-c), where a, b, and c are constants, which of the following could be the value of b?\n\n[Figure: Graph of y = g(x) in xy-plane, x-axis from -5 to 5, y-axis from -10 to 10. The curve enters from below near x=-2, crosses the x-axis at (-2,0), climbs to a local max near (-1,7), descends and touches the x-axis at (1,0), dips slightly forming a small local minimum near x=2, rises slightly and touches/crosses the x-axis again at (3,0), then rises steeply off the top beyond x=4. Three x-intercepts visible: x=-2, x=1, x=3.]", images: [], type: "mc", choices: {"A": "31", "B": "3", "C": "-2", "D": "-25"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 178, stem: "x^2 - 34x + c = 0\n\nIn the given equation, c is a constant. The equation has no real solutions if c > n. What is the least possible value of n?", images: [], type: "grid", choices: null, answer: "289", domain: "Advanced Math", difficulty: "Hard" },
{ num: 179, stem: "Which of the following expressions has a factor of x + 2b, where b is a positive integer constant?", images: [], type: "mc", choices: {"A": "3x^2 + 7x + 14b", "B": "3x^2 + 28x + 14b", "C": "3x^2 + 42x + 14b", "D": "3x^2 + 49x + 14b"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 180, stem: "An object was launched upward from a platform. The graph shown models the height above ground, y, in meters, of the object x seconds after it was launched. For which of the following intervals of time was the height of the object increasing for the entire interval?\n\n[Figure: Graph with y-axis 'Height above ground (meters)' from 0 to 60 and x-axis 'Time (seconds)' from 0 to 10. Downward-opening parabola-like arc starting at approximately (0, 8), rising to a marked peak at (2, 28), then decreasing back down to about (4.5, 0).]", images: [], type: "mc", choices: {"A": "From x = 0 to x = 2", "B": "From x = 0 to x = 4", "C": "From x = 2 to x = 3", "D": "From x = 3 to x = 4"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 181, stem: "The population P of a certain city y years after the last census is modeled by the equation below, where r is a constant and P0 is the population when y = 0.\n\nP = P0(1+r)^y\n\nIf during this time the population of the city decreases by a fixed percent each year, which of the following must be true?", images: [], type: "mc", choices: {"A": "r < -1", "B": "-1 < r < 0", "C": "0 < r < 1", "D": "r > 1"}, answer: "B", domain: "Advanced Math", difficulty: "Hard" },
{ num: 182, stem: "Which expression is equivalent to (2x^2 - 4) - (-3x^2 + 2x - 7)?", images: [], type: "mc", choices: {"A": "5x^2 - 2x + 3", "B": "5x^2 + 2x - 3", "C": "-x^2 - 2x - 11", "D": "-x^2 + 2x - 11"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 183, stem: "The graph of y = f(x) is shown in the xy-plane. What is the value of f(0)?\n\n[Figure: Graph, both axes from -8 to 8. An increasing, exponential-shaped curve labeled y = f(x) crosses the y-axis at (0, 3), then rises steeply and exits the top of the frame near x = 2. A separate short curve segment appears in the lower right of the frame, rising steeply from about (6, -8) to (8, -3).]", images: [], type: "mc", choices: {"A": "-3", "B": "0", "C": "3/5", "D": "3"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 184, stem: "The function f is defined by f(x) = 10x^2 - 32x - 152. What is the value of f(0)?", images: [], type: "mc", choices: {"A": "-152", "B": "-32", "C": "0", "D": "10"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 185, stem: "The graph gives the estimated number of catalogs y, in thousands, a company sent to its customers at the end of each year, where x represents the number of years since the end of 1992, where 0 <= x <= 10. Which statement is the best interpretation of the y-intercept in this context?\n\n[Figure: Graph, both axes from 0 to 10. A decreasing, decay-shaped curve starts at the y-intercept (0, 9), decreases steeply at first, then levels off approaching the x-axis as x approaches 10.]", images: [], type: "mc", choices: {"A": "The estimated total number of catalogs the company sent to its customers during the first 10 years was 9,000.", "B": "The estimated total number of catalogs the company sent to its customers from the end of 1992 to the end of 2002 was 90.", "C": "The estimated number of catalogs the company sent to its customers at the end of 1992 was 9.", "D": "The estimated number of catalogs the company sent to its customers at the end of 1992 was 9,000."}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 186, stem: "The graph of y = f(x) is shown, where f(x) = ab^x + c, and a, b, and c are constants. For how many values of x does f(x) = 0?\n\n[Figure: Graph, both axes from -10 to 10. The visible curve lies entirely below y = -7: nearly flat around y = -7 to -7.5 for x from about -10 to -2, then curves downward, dropping below y = -10 by around x = 0-1. The curve never crosses y = 0.]", images: [], type: "mc", choices: {"A": "Three", "B": "Two", "C": "One", "D": "Zero"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 187, stem: "f(x) = (x+6)(x+5)(x-4)\n\nThe function f is given. Which table of values represents y = f(x) - 3?", images: [], type: "mc", choices: {"A": "x=-6,y=-9 ; x=-5,y=-8 ; x=4,y=1", "B": "x=-6,y=-3 ; x=-5,y=-3 ; x=4,y=-3", "C": "x=-6,y=-3 ; x=-5,y=-2 ; x=4,y=7", "D": "x=-6,y=3 ; x=-5,y=3 ; x=4,y=3"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 188, stem: "|x - 5| = 10\n\nWhat is one possible solution to the given equation?", images: [], type: "grid", choices: null, answer: "15|-5", domain: "Advanced Math", difficulty: "Easy" },
{ num: 189, stem: "Which expression is equivalent to 42a/k + 42ak, where k > 0?", images: [], type: "mc", choices: {"A": "84a/k", "B": "84ak^2/k", "C": "42a(k+1)/k", "D": "42a(k^2+1)/k"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 190, stem: "x = 3\ny = (15 - x)^2\n\nA solution to the given system of equations is (x, y). What is the value of xy?", images: [], type: "mc", choices: {"A": "432", "B": "54", "C": "45", "D": "18"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 191, stem: "The function f is defined by f(x) = x^2 + x + 71. What is the value of f(2)?", images: [], type: "grid", choices: null, answer: "77", domain: "Advanced Math", difficulty: "Easy" },
{ num: 192, stem: "The product of two positive integers is 546. If the first integer is 11 greater than twice the second integer, what is the smaller of the two integers?", images: [], type: "mc", choices: {"A": "7", "B": "14", "C": "39", "D": "78"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 193, stem: "f(x) = 5,470(0.64)^(x/12)\n\nThe function f gives the value, in dollars, of a certain piece of equipment after x months of use. If the value of the equipment decreases each year by p% of its value the preceding year, what is the value of p?", images: [], type: "mc", choices: {"A": "4", "B": "5", "C": "36", "D": "64"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 194, stem: "p + 34 = q + r\n\nThe given equation relates the variables p, q, and r. Which equation correctly expresses p in terms of q and r?", images: [], type: "mc", choices: {"A": "p = q + r + 34", "B": "p = q + r - 34", "C": "p = -q - r + 34", "D": "p = -q - r - 34"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 195, stem: "-16x^2 - 8x + c = 0\n\nIn the given equation, c is a constant. The equation has exactly one solution. What is the value of c?", images: [], type: "grid", choices: null, answer: "-1", domain: "Advanced Math", difficulty: "Hard" },
{ num: 196, stem: "The expression (x^(-2) * y^(1/2)) / (x^(1/3) * y^(-1)), where x > 1 and y > 1, is equivalent to which of the following?", images: [], type: "mc", choices: {"A": "sqrt(y) / cbrt(x^2)", "B": "(y * sqrt(y)) / cbrt(x^2)", "C": "(y * sqrt(y)) / (x * sqrt(x))", "D": "(y * sqrt(y)) / (x^2 * cbrt(x))"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 197, stem: "The graph shows the estimated boiling point y, in degrees Celsius, of a normal paraffin with a molecular weight of x grams per mole, where 1 <= x <= 280. Which statement is the best interpretation of the point (149.02, 186.05)?\n\n[Figure: A curve on a grid, x-axis (ticks at 50,100,150,200,250) and y-axis (ticks 50-350). The curve starts near (10,-175), rises steeply, is concave-down (square-root/log-shaped growth), passing through a labeled point at approximately (149.02, 186.05), continuing up to about (280, 340) at the top right.]", images: [], type: "mc", choices: {"A": "A normal paraffin with a molecular weight of 186.05 grams per mole has an estimated boiling point of 149.02 degrees Celsius.", "B": "A normal paraffin with a molecular weight of 149.02 grams per mole has an estimated boiling point of 186.05 degrees Celsius.", "C": "The minimum estimated boiling point for normal paraffins corresponds to a paraffin with a molecular weight of 149.02 grams per mole and an estimated boiling point of 186.05 degrees Celsius.", "D": "The maximum estimated boiling point for normal paraffins corresponds to a paraffin with a molecular weight of 149.02 grams per mole and an estimated boiling point of 186.05 degrees Celsius."}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 198, stem: "In the xy-plane, the y-coordinate of the y-intercept of the graph of the function f is c. Which of the following must be equal to c?", images: [], type: "mc", choices: {"A": "f(0)", "B": "f(1)", "C": "f(2)", "D": "f(3)"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 199, stem: "f(t) = 500(0.5)^(t/12)\n\nThe function f models the intensity of an X-ray beam, in number of particles in the X-ray beam, t millimeters below the surface of a sample of iron. According to the model, what is the estimated number of particles in the X-ray beam when it is at the surface of the sample of iron?", images: [], type: "mc", choices: {"A": "500", "B": "12", "C": "5", "D": "2"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 200, stem: "5x^2 - 37x - 24 = 0\n\nWhat is the positive solution to the given equation?", images: [], type: "mc", choices: {"A": "3/5", "B": "3", "C": "8", "D": "37"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 201, stem: "The population of the town of Smithville doubled every 75 years from 1659 to 1959. The population of this town was 240,000 in 1959. What was the population of this town in 1659?", images: [], type: "grid", choices: null, answer: "15000", domain: "Advanced Math", difficulty: "Medium" },
{ num: 202, stem: "The expression 4x^2 + bx - 45, where b is a constant, can be rewritten as (hx + k)(x + j), where h, k, and j are integer constants. Which of the following must be an integer?", images: [], type: "mc", choices: {"A": "b/h", "B": "b/k", "C": "45/h", "D": "45/k"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 203, stem: "y = 0.25x^2 - 7.5x + 90.25\n\nThe equation gives the estimated stock price y, in dollars, for a certain company x days after a new product launched, where 0 <= x <= 20. Which statement is the best interpretation of (x, y) = (1, 83) in this context?", images: [], type: "mc", choices: {"A": "The company's estimated stock price increased $83 every day after the new product launched.", "B": "The company's estimated stock price increased $1 every 83 days after the new product launched.", "C": "1 day after the new product launched, the company's estimated stock price is $83.", "D": "83 days after the new product launched, the company's estimated stock price is $1."}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 204, stem: "On April 1, there were 233 views of an advertisement posted on a website. Every 2 days after April 1, the number of views of the advertisement had increased by 70% of the number of views 2 days earlier. The function f gives the predicted number of views x days after April 1. Which equation defines f?", images: [], type: "mc", choices: {"A": "f(x) = 233(0.70)^(x/2)", "B": "f(x) = 233(0.70)^(2x)", "C": "f(x) = 233(1.70)^(x/2)", "D": "f(x) = 233(1.70)^(2x)"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 205, stem: "The graph shown models the number of residents of a certain city x years after 2010. How many residents does this model estimate the city had in 2010?\n\n[Figure: Graph with x-axis 'Years after 2010' (0-10) and y-axis 'Number of residents' (0-40,000). Curve starts at labeled point (0, 20,000), increases with slight concave-up shape, passing roughly through (4,25,000), (6,28,000), (8,31,000), ending around (10,34,500).]", images: [], type: "mc", choices: {"A": "0", "B": "2,000", "C": "20,000", "D": "25,000"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 206, stem: "(x - 1)^2 = -4\n\nHow many distinct real solutions does the given equation have?", images: [], type: "mc", choices: {"A": "Exactly one", "B": "Exactly two", "C": "Infinitely many", "D": "Zero"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 207, stem: "x^2 = (22)(22)\n\nWhat is the positive solution to the given equation?", images: [], type: "grid", choices: null, answer: "22", domain: "Advanced Math", difficulty: "Easy" },
{ num: 208, stem: "Which expression is a factor of 2x^2 + 38x + 10?", images: [], type: "mc", choices: {"A": "2", "B": "5x", "C": "38x", "D": "2x^2"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 209, stem: "f(x) = x^3 - 9x\ng(x) = x^2 - 2x - 3\n\nWhich of the following expressions is equivalent to f(x)/g(x), for x > 3?", images: [], type: "mc", choices: {"A": "1/(x+1)", "B": "(x+3)/(x+1)", "C": "x(x-3)/(x+1)", "D": "x(x+3)/(x+1)"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 210, stem: "z^2 + 10z - 24 = 0\n\nWhat is one of the solutions to the given equation?", images: [], type: "grid", choices: null, answer: "2|-12", domain: "Advanced Math", difficulty: "Medium" },
{ num: 211, stem: "What is the x-coordinate of the x-intercept of the graph shown?\n\n[Figure: Graph of an increasing curve resembling an exponential function. For negative x values the curve is nearly flat, hovering just below y = -2 (horizontal asymptote near y=-2). It gradually rises, crosses the x-axis at (6,0), then increases steeply upward, passing near (7,8). Axes range from -8 to 8 on both x and y.]", images: [], type: "grid", choices: null, answer: "6", domain: "Advanced Math", difficulty: "Easy" },
{ num: 212, stem: "y = 18\ny = -3(x-18)^2 + 15\n\nIf the given equations are graphed in the xy-plane, at how many points do the graphs of the equations intersect?", images: [], type: "mc", choices: {"A": "Exactly one", "B": "Exactly two", "C": "Infinitely many", "D": "Zero"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 213, stem: "f(x) = x^3 + 3x^2 - 6x - 1\n\nFor the function f defined above, what is the value of f(-1)?", images: [], type: "mc", choices: {"A": "-11", "B": "-7", "C": "7", "D": "11"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 214, stem: "y = 4(2^x)\n\nWhich of the following is the graph in the xy-plane of the given equation?\n\n[Figure: Four small answer-choice graphs (A-D), x-axis -4 to 4, y-axis -25 to 100. A and B show decreasing/decaying exponentials. C shows a rapidly increasing exponential exceeding 100 by x=2-3. D shows the correct doubling curve through (0,4),(1,8),(2,16),(3,32),(4,64).]", images: [], type: "mc", choices: {"A": "A decreasing exponential curve: high on the left near x=-4, falling steeply and leveling off near y=0 by around x=1-2.", "B": "A decreasing exponential curve similar to A but decaying more gradually.", "C": "An increasing exponential curve passing near (0,4) but rising much faster than doubling per unit x, exceeding 100 by around x=2-3.", "D": "An increasing exponential curve passing through (0,4),(1,8),(2,16),(3,32),(4,64) - doubling for each unit increase in x."}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 215, stem: "What is the x-intercept of the graph shown?\n\n[Figure: Decreasing, concave-down curve. Starts around y=3 near x=-10, roughly flat through negative x, curves downward more steeply, crossing the x-axis at (5,0), continuing down to about y=-6 near x=8-9. Axes: x -10 to 10, y -6 to 12.]", images: [], type: "mc", choices: {"A": "(-5, 0)", "B": "(5, 0)", "C": "(-2, 0)", "D": "(2, 0)"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 216, stem: "The expression (1/3)x^2 - 2 can be rewritten as (1/3)(x-k)(x+k), where k is a positive constant. What is the value of k?", images: [], type: "mc", choices: {"A": "2", "B": "6", "C": "sqrt(2)", "D": "sqrt(6)"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 217, stem: "If f(x) = (x^2 - 6x + 3)/(x - 1), what is f(-1)?", images: [], type: "mc", choices: {"A": "-5", "B": "-2", "C": "2", "D": "5"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 218, stem: "cbrt(p^2) = t^(9/7)\n\nIn the given equation, p > 1 and t > 1. If t = p^(3n-1), where n is a constant, what is the value of n?", images: [], type: "grid", choices: null, answer: "41/81|0.5061|0.5062|0.506", domain: "Advanced Math", difficulty: "Hard" },
{ num: 219, stem: "5x^2 + 10x + 16 = 0\n\nHow many distinct real solutions does the given equation have?", images: [], type: "mc", choices: {"A": "Exactly one", "B": "Exactly two", "C": "Infinitely many", "D": "Zero"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 220, stem: "The function f(x) = (1/9)(x-7)^2 + 3 gives a metal ball's height above the ground f(x), in inches, x seconds after it started moving on a track, where 0 <= x <= 10. Which of the following is the best interpretation of the vertex of the graph of y = f(x) in the xy-plane?", images: [], type: "mc", choices: {"A": "The metal ball's minimum height was 3 inches above the ground.", "B": "The metal ball's minimum height was 7 inches above the ground.", "C": "The metal ball's height was 3 inches above the ground when it started moving.", "D": "The metal ball's height was 7 inches above the ground when it started moving."}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 221, stem: "The area of a triangle is 270 square centimeters. The length of the base of the triangle is 12 centimeters greater than the height of the triangle. What is the height, in centimeters, of the triangle?", images: [], type: "mc", choices: {"A": "15", "B": "18", "C": "30", "D": "36"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 222, stem: "The graph of y = f(x) + 4 is shown. Which equation defines function f?\n\n[Figure: Decreasing, steepening curve. Starts near (-1,9) upper left, passes through approx (0,8), crosses the x-axis just after x=2 (around x=2.1), plunges steeply past y=-4 by around x=2.5-3. Axes: x -1 to 5, y -4 to 10. This is the graph of y = f(x) + 4.]", images: [], type: "mc", choices: {"A": "f(x) = -3^x + 1", "B": "f(x) = -3^x + 5", "C": "f(x) = -3^x + 8", "D": "f(x) = -3^x + 9"}, answer: "B", domain: "Advanced Math", difficulty: "Hard" },
{ num: 223, stem: "y = x^2 + 2x + 1\nx + y + 1 = 0\n\nIf (x1, y1) and (x2, y2) are the two solutions to the system of equations above, what is the value of y1 + y2?", images: [], type: "mc", choices: {"A": "-3", "B": "-2", "C": "-1", "D": "1"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 224, stem: "The function f(w) = 6w^2 gives the area of a rectangle, in square feet (ft^2), if its width is w ft and its length is 6 times its width. Which of the following is the best interpretation of f(14) = 1,176?", images: [], type: "mc", choices: {"A": "If the width of the rectangle is 14 ft, then the area of the rectangle is 1,176 ft^2.", "B": "If the width of the rectangle is 14 ft, then the length of the rectangle is 1,176 ft.", "C": "If the width of the rectangle is 1,176 ft, then the length of the rectangle is 14 ft.", "D": "If the width of the rectangle is 1,176 ft, then the area of the rectangle is 14 ft^2."}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 225, stem: "The expression 2x^2 + ax is equivalent to x(2x + 7) for some constant a. What is the value of a?", images: [], type: "mc", choices: {"A": "2", "B": "3", "C": "4", "D": "7"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 226, stem: "For the quadratic function f, the table shows three values of x and their corresponding values of f(x):\nx = -1, f(x) = 10\nx = 0, f(x) = 14\nx = 1, f(x) = 20\n\nWhich equation defines f?\n\n[Figure: Data table with columns x and f(x): rows (-1,10), (0,14), (1,20).]", images: [], type: "mc", choices: {"A": "f(x) = 3x^2 + 3x + 14", "B": "f(x) = 5x^2 + x + 14", "C": "f(x) = 9x^2 - x + 14", "D": "f(x) = x^2 + 5x + 14"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 227, stem: "f(t) = 8,000(0.65)^t\n\nThe given function f models the number of coupons a company sent to their customers at the end of each year, where t represents the number of years since the end of 1998, and 0 <= t <= 5. If y = f(t) is graphed in the ty-plane, which of the following is the best interpretation of the y-intercept of the graph in this context?", images: [], type: "mc", choices: {"A": "The minimum estimated number of coupons the company sent to their customers during the 5 years was 1,428.", "B": "The minimum estimated number of coupons the company sent to their customers during the 5 years was 8,000.", "C": "The estimated number of coupons the company sent to their customers at the end of 1998 was 1,428.", "D": "The estimated number of coupons the company sent to their customers at the end of 1998 was 8,000."}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 228, stem: "The graph of a system of a linear equation and a nonlinear equation is shown. What is the solution (x, y) to this system?\n\n[Figure: Increasing, concave-down curve (nonlinear equation) starts near (0,4), rises through the intersection point, continuing up to about (7,9). A steep, nearly vertical decreasing line (linear equation) passes through approx (3,9), descends through the intersection near (4,5), continues down to about (6,-2). Intersect at (4,5). Axes x: -2 to 9, y: -2 to 9.]", images: [], type: "mc", choices: {"A": "(0, 0)", "B": "(0, 4)", "C": "(4, 5)", "D": "(5, 0)"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 229, stem: "If u - 3 = 6/(t - 2), what is t in terms of u?", images: [], type: "mc", choices: {"A": "t = 1/u", "B": "t = (2u + 9)/u", "C": "t = 1/(u - 3)", "D": "t = 2u/(u - 3)"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 230, stem: "-9x^2 + 30x + c = 0\n\nIn the given equation, c is a constant. The equation has exactly one solution. What is the value of c?", images: [], type: "mc", choices: {"A": "3", "B": "0", "C": "-25", "D": "-53"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 231, stem: "x^2/sqrt(x^2 - c^2) = c^2/sqrt(x^2 - c^2) + 39\n\nIn the given equation, c is a positive constant. Which of the following is one of the solutions to the given equation?", images: [], type: "mc", choices: {"A": "-c", "B": "-c^2 - 39^2", "C": "-sqrt(39^2 - c^2)", "D": "-sqrt(c^2 + 39^2)"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 232, stem: "Which of the following functions has (have) a minimum value at -3?\n\nI. f(x) = -6(3)^x - 3\nII. g(x) = -3(6)^x", images: [], type: "mc", choices: {"A": "I only", "B": "II only", "C": "I and II", "D": "Neither I nor II"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 233, stem: "3x(x - 4)(x + 5) = 0\n\nWhat is one of the solutions to the given equation?", images: [], type: "mc", choices: {"A": "-4", "B": "0", "C": "3", "D": "5"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 234, stem: "w^2 + 12w - 40 = 0\n\nWhich of the following is a solution to the given equation?", images: [], type: "mc", choices: {"A": "6 - 2*sqrt(19)", "B": "2*sqrt(19)", "C": "sqrt(19)", "D": "-6 + 2*sqrt(19)"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 235, stem: "f(x) = 2(3^x)\n\nFor the function f defined above, what is the value of f(2)?", images: [], type: "mc", choices: {"A": "9", "B": "12", "C": "18", "D": "36"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 236, stem: "An object's kinetic energy, in joules, is equal to the product of one-half the object's mass, in kilograms, and the square of the object's speed, in meters per second. What is the speed, in meters per second, of an object with a mass of 4 kilograms and kinetic energy of 18 joules?", images: [], type: "mc", choices: {"A": "3", "B": "6", "C": "9", "D": "36"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 237, stem: "The graph of a system of an absolute value function and a linear function is shown. What is the solution (x, y) to this system of two equations?\n\n[Figure: Coordinate grid, x-axis -3 to 10, y-axis 0 to 10. A V-shaped absolute value graph has vertex at (4,2), left ray rising through (1,5) up to about (0,6) continuing to (-3,9), right ray rising through (5,3),(6,4),(7,5) up to about (10,8). A straight line passes through the y-axis around (0,4) and continues upward through the intersection point (1,5) up to about (6,10). The two graphs intersect at (1,5).]", images: [], type: "mc", choices: {"A": "(-1, 5)", "B": "(0, 4)", "C": "(1, 5)", "D": "(4, 2)"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 238, stem: "In the xy-plane, a parabola has vertex (9, -14) and intersects the x-axis at two points. If the equation of the parabola is written in the form y = ax^2 + bx + c, where a, b, and c are constants, which of the following could be the value of a + b + c?", images: [], type: "mc", choices: {"A": "-23", "B": "-19", "C": "-14", "D": "-12"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 239, stem: "What is the y-intercept of the graph shown?\n\n[Figure: Increasing, concave-up (exponential-type) curve. Axes x from -10 to 10, y from 0 to 14. Curve rises slowly from the left, passing through approximately (-6,6.5) and (-2,7), crosses the y-axis at (0,8), then rises steeply, exiting the top of the grid near x=4 (around y=14).]", images: [], type: "mc", choices: {"A": "(-8, 0)", "B": "(-6, 0)", "C": "(0, 6)", "D": "(0, 8)"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 240, stem: "8j = k + 15m\n\nThe given equation relates the distinct positive numbers j, k, and m. Which equation correctly expresses j in terms of k and m?", images: [], type: "mc", choices: {"A": "j = k/8 + 15m", "B": "j = k + 15m/8", "C": "j = 8(k + 15m)", "D": "j = (k + 15m)/8"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 241, stem: "The parabola shown intersects the y-axis at the point (x, y). What is the value of y?\n\n[Figure: Upward-opening parabola with vertex at approximately (0,7), the minimum point. Axes: x from -2 to 2, y from -2 to 12. The parabola crosses the y-axis at (0,7) and rises symmetrically on both sides.]", images: [], type: "grid", choices: null, answer: "7", domain: "Advanced Math", difficulty: "Easy" },
{ num: 242, stem: "8x + y = -11\n2x^2 = y + 341\n\nThe graphs of the equations in the given system of equations intersect at the point (x, y) in the xy-plane. What is a possible value of x?", images: [], type: "mc", choices: {"A": "-15", "B": "-11", "C": "2", "D": "8"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 243, stem: "The table above gives selected values of a polynomial function p. Based on the values in the table, which of the following must be a factor of p?\n\n[Figure: Data table with columns x and p(x), five rows: x=-2,p(x)=5; x=-1,p(x)=0; x=0,p(x)=-3; x=1,p(x)=-1; x=2,p(x)=0.]", images: [], type: "mc", choices: {"A": "(x - 3)", "B": "(x + 3)", "C": "(x - 1)(x + 2)", "D": "(x + 1)(x - 2)"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 244, stem: "A ball is dropped from an initial height of 22 feet and bounces off the ground repeatedly. The function h estimates that the maximum height reached after each time the ball hits the ground is 85% of the maximum height reached after the previous time the ball hit the ground. Which equation defines h, where h(n) is the estimated maximum height of the ball after it has hit the ground n times and n is a whole number greater than 1 and less than 10?", images: [], type: "mc", choices: {"A": "h(n) = 22(0.22)^n", "B": "h(n) = 22(0.85)^n", "C": "h(n) = 85(0.22)^n", "D": "h(n) = 85(0.85)^n"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 245, stem: "What is the y-intercept of the graph shown?\n\n[Figure: Increasing, concave-down curve with horizontal asymptote at y=-5. Axes: x from -8 to 8, y from -10 to 1. Curve rises steeply from near (0,-9), passes through the y-axis at (0,-6), levels off approaching but not reaching y=-5 as x increases toward 8.]", images: [], type: "mc", choices: {"A": "(0, -6)", "B": "(-6, 0)", "C": "(0, 0)", "D": "(-5, -5)"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 246, stem: "The height, in feet, of an object x seconds after it is thrown straight up in the air can be modeled by the function h(x) = -16x^2 + 20x + 5.\n\nBased on the model, which of the following statements best interprets the equation h(1.4) = 1.64?", images: [], type: "mc", choices: {"A": "The height of the object 1.4 seconds after being thrown straight up in the air is 1.64 feet.", "B": "The height of the object 1.64 seconds after being thrown straight up in the air is 1.4 feet.", "C": "The height of the object 1.64 seconds after being thrown straight up in the air is approximately 1.4 times as great as its initial height.", "D": "The speed of the object 1.4 seconds after being thrown straight up in the air is approximately 1.64 feet per second."}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 247, stem: "The speed of sound in dry air, v, can be modeled by the formula v = 331.3 + 0.606T, where T is the temperature in degrees Celsius and v is measured in meters per second. Which of the following correctly expresses T in terms of v?", images: [], type: "mc", choices: {"A": "T = (v + 0.606)/331.3", "B": "T = (v - 0.606)/331.3", "C": "T = (v + 331.3)/0.606", "D": "T = (v - 331.3)/0.606"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 248, stem: "The function f is defined by f(x) = x^3 + 9. What is the value of f(2)?", images: [], type: "mc", choices: {"A": "14", "B": "15", "C": "17", "D": "18"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 249, stem: "Which expression is equivalent to (7x^3 + 7x) - (6x^3 - 3x)?", images: [], type: "mc", choices: {"A": "x^3 + 10x", "B": "-13x^3 + 10x", "C": "-13x^3 + 4x", "D": "x^3 + 4x"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 250, stem: "x(x + 1) - 56 = 4x(x - 7)\n\nWhat is the sum of the solutions to the given equation?", images: [], type: "grid", choices: null, answer: "29/3|9.666|9.667", domain: "Advanced Math", difficulty: "Hard" },
{ num: 251, stem: "During the first part of an experiment, a ball was launched from a 7-foot-tall platform. The graph shows the height y, in feet, of the ball x seconds after it was launched during the first part of the experiment.\n\nDuring the second part of the experiment, the ball was launched the same way, but from a platform that is 2 feet shorter than the first platform. Which of the following graphs could represent the height y, in feet, of the ball x seconds after it was launched during the second part of the experiment?\n\n[Figure: Original graph: parabola, x-axis 0 to 2, y-axis 0 to 16. Curve begins at y-intercept (0,7), rises to a peak near (0.3,8.3), falls, crossing the x-axis at x=1. Four answer-choice graphs (A-D) use the same axis scale and shape, differing only in vertical position - representing the platform being 2 feet shorter (y-intercept should be 7-2=5, matching choice B).]", images: [], type: "mc", choices: {"A": "Graph starting at y-intercept about 4, rising to a peak near (0.3,5), then falling to hit the x-axis at x=1.", "B": "Graph starting at y-intercept about 5, rising to a peak near (0.3,6.2), then falling to hit the x-axis at x=1.", "C": "Graph starting at y-intercept about 9, rising to a peak near (0.3,10.2), then falling to hit the x-axis at x=1.", "D": "Graph starting at y-intercept about 14, rising to a peak near (0.3,15.2), then falling to hit the x-axis slightly after x=1."}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 252, stem: "When the quadratic function f is graphed in the xy-plane, where y = f(x), its vertex is (-3, 6). One of the x-intercepts of this graph is (-17/4, 0). What is the other x-intercept of the graph?", images: [], type: "mc", choices: {"A": "(-29/4, 0)", "B": "(-7/4, 0)", "C": "(5/4, 0)", "D": "(17/4, 0)"}, answer: "B", domain: "Advanced Math", difficulty: "Hard" },
{ num: 253, stem: "Function f is a quadratic function where f(-20) = 0 and f(-4) = 0. The graph of y = f(x) in the xy-plane has a vertex at (r, -64). What is the value of r?", images: [], type: "grid", choices: null, answer: "-12", domain: "Advanced Math", difficulty: "Hard" },
{ num: 254, stem: "The function f is defined by f(x) = (x + 3)(x + 1). The graph of f in the xy-plane is a parabola. Which of the following intervals contains the x-coordinate of the vertex of the graph of f?", images: [], type: "mc", choices: {"A": "-4 < x < -3", "B": "-3 < x < 1", "C": "1 < x < 3", "D": "3 < x < 4"}, answer: "B", domain: "Advanced Math", difficulty: "Hard" },
{ num: 255, stem: "If 4^(8c) = cbrt(4^7), what is the value of c?", images: [], type: "grid", choices: null, answer: "7/24|.2916|.2917", domain: "Advanced Math", difficulty: "Hard" },
{ num: 256, stem: "x + y = 12\ny = x^2\nIf (x, y) is a solution to the system of equations above, which of the following is a possible value of x?", images: [], type: "mc", choices: {"A": "0", "B": "1", "C": "2", "D": "3"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 257, stem: "y = -2.5\ny = x^2 + 8x + k\nIn the given system of equations, k is a positive integer constant. The system has no real solutions. What is the least possible value of k?", images: [], type: "grid", choices: null, answer: "14", domain: "Advanced Math", difficulty: "Hard" },
{ num: 258, stem: "The function f is defined by f(x) = a^x + b, where a and b are constants and a > 0. In the xy-plane, the graph of y = f(x) has a y-intercept at (0, -25) and passes through the point (2, 23). What is the value of a + b?", images: [], type: "grid", choices: null, answer: "-19", domain: "Advanced Math", difficulty: "Hard" },
{ num: 259, stem: "The graph shows a marble's height above the ground y, in inches, x seconds after it started moving on an elevated track of a marble run. Which of the following is the best interpretation of the y-intercept of the graph?\n\n[Figure: xy-plane graph, x-axis 'x' (seconds) 0-10, y-axis 'y' (inches) 0-10. A U-shaped curve starts at (0,8), decreases to a minimum around (4,2), then increases back up, passing through approximately (8,8) and continuing to rise past (9,10+).]", images: [], type: "mc", choices: {"A": "The marble's height was 0 inches above the ground 8 seconds after it started moving.", "B": "The marble's height was 8 inches above the ground when it started moving.", "C": "The marble's minimum height was 0 inches above the ground.", "D": "The marble's minimum height was 8 inches above the ground."}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 260, stem: "f(theta) = -0.28(theta - 27)^2 + 880\nAn engineer wanted to identify the best angle for a cooling fan in an engine in order to get the greatest airflow. The engineer discovered that the function above models the airflow f(theta), in cubic feet per minute, as a function of the angle of the fan theta, in degrees. According to the model, what angle, in degrees, gives the greatest airflow?", images: [], type: "mc", choices: {"A": "-0.28", "B": "0.28", "C": "27", "D": "880"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 261, stem: "p = 20 + 16/n\nThe given equation relates the numbers p and n, where n is not equal to 0 and p > 20. Which equation correctly expresses n in terms of p?", images: [], type: "mc", choices: {"A": "n = (p - 20)/16", "B": "n = p/16 + 20", "C": "n = p/16 - 20", "D": "n = 16/(p - 20)"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 262, stem: "The function f(t) = 60,000(2)^(t/410) gives the number of bacteria in a population t minutes after an initial observation. How much time, in minutes, does it take for the number of bacteria in the population to double?", images: [], type: "grid", choices: null, answer: "410", domain: "Advanced Math", difficulty: "Medium" },
{ num: 263, stem: "y = (x - 2)(x + 4)\ny = 6x - 12\nWhich ordered pair (x, y) is the solution to the given system of equations?", images: [], type: "mc", choices: {"A": "(0, 2)", "B": "(-4, 2)", "C": "(2, 0)", "D": "(2, -4)"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 264, stem: "Which expression is equivalent to 4(x^2 + 6)?", images: [], type: "mc", choices: {"A": "4x^2 + 24", "B": "4x^2 + 10", "C": "4x^2 + 6", "D": "4x^2 - 2"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 265, stem: "Which expression is equivalent to 6x^8y^2 + 12x^2y^2?", images: [], type: "mc", choices: {"A": "6x^2y^2(2x^6)", "B": "6x^2y^2(x^4)", "C": "6x^2y^2(x^6 + 2)", "D": "6x^2y^2(x^4 + 2)"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 266, stem: "|x - 9| + 45 = 63\nWhat is the sum of the solutions to the given equation?", images: [], type: "grid", choices: null, answer: "18", domain: "Advanced Math", difficulty: "Hard" },
{ num: 267, stem: "1/(7b) = 11x/y\nThe given equation relates the positive numbers b, x, and y. Which equation correctly expresses x in terms of b and y?", images: [], type: "mc", choices: {"A": "x = 7by/11", "B": "x = y - 77b", "C": "x = y/(77b)", "D": "x = 77by"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 268, stem: "(5x + 4)(2x - 5) = 0\nWhich of the following is a solution to the given equation?", images: [], type: "mc", choices: {"A": "-5/2", "B": "-5/4", "C": "-4/5", "D": "-2/5"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 269, stem: "Time (years): 0, 1, 2\nTotal amount (dollars): 670.00, 674.02, 678.06\nSara opened a savings account at a bank. The table shows the exponential relationship between the time t, in years, since Sara opened the account and the total amount d, in dollars, in the account. If Sara made no additional deposits or withdrawals, which of the following equations best represents the relationship between t and d?\n\n[Figure: Two-column data table 'Time (years)' and 'Total amount (dollars)' with three rows: t=0,d=670.00; t=1,d=674.02; t=2,d=678.06.]", images: [], type: "mc", choices: {"A": "d = 0.006(1 + 670)^t", "B": "d = 670(1 + 0.006)^t", "C": "d = (1 + 0.006)^t", "D": "d = (1 + 670)^t"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 270, stem: "|p| + 61 = 65\nWhich value is a solution to the given equation?", images: [], type: "mc", choices: {"A": "65/61", "B": "4", "C": "126", "D": "130"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 271, stem: "A landscaper is designing a rectangular garden. The length of the garden is to be 5 feet longer than the width. If the area of the garden will be 104 square feet, what will be the length, in feet, of the garden?", images: [], type: "grid", choices: null, answer: "13", domain: "Advanced Math", difficulty: "Hard" },
{ num: 272, stem: "P(t) = 290(1.04)^((2/3)t)\nThe function P models the population, in thousands, of a certain city t years after 2005. According to the model, the population is predicted to increase by n% every 18 months. What is the value of n?", images: [], type: "mc", choices: {"A": "0.38", "B": "1.04", "C": "4", "D": "6"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 273, stem: "The graph of a system of a linear and a quadratic equation is shown. What is the solution (x, y) to this system?\n\n[Figure: xy-plane graph, gridlines at 2,4,6,8,10,12 on both axes. A horizontal line at y=1 spans the width of the graph. An upward-opening parabola with vertex at approximately (4,1) rises steeply on both sides. The parabola's vertex sits exactly on the horizontal line, so the two graphs appear to intersect only at (4,1).]", images: [], type: "mc", choices: {"A": "(0, 0)", "B": "(-4, 1)", "C": "(4, -1)", "D": "(4, 1)"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 274, stem: "Which of the following is equivalent to 2(x^2 - x) + 3(x^2 - x)?", images: [], type: "mc", choices: {"A": "5x^2 - 5x", "B": "5x^2 + 5x", "C": "5x", "D": "5x^2"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 275, stem: "7m = 2(n + p)\nThe given equation relates the positive numbers m, n, and p. Which equation correctly gives m in terms of n and p?", images: [], type: "mc", choices: {"A": "m = 2(n + p)/7", "B": "m = 2(n + p)", "C": "m = 2(n + p) - 7", "D": "m = 2 - n - p - 7"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 276, stem: "The function f is defined by f(x) = 8x^3 + 4. What is the value of f(2)?", images: [], type: "grid", choices: null, answer: "68", domain: "Advanced Math", difficulty: "Medium" },
{ num: 277, stem: "f(x) = -6x^2 + 60x - 126\n\nThe function f is defined by the given equation. Which of the following equivalent forms of the equation displays the maximum value of the function as a constant or coefficient?", images: [], type: "mc", choices: {"A": "f(x) = -6x^2 + 42x + 18x - 126", "B": "f(x) = -6x(x-7) + 18(x-7)", "C": "f(x) = -6(x-5)^2 + 24", "D": "f(x) = -6(x-7)(x-3)"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 278, stem: "Which expression is equivalent to 13x^2 - 7x^2?", images: [], type: "mc", choices: {"A": "-91x^2", "B": "6x^2", "C": "20x^2", "D": "40x^2"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 279, stem: "In the xy-plane, the graph of y = x^2 - 9 intersects line p at (1, a) and (5, b), where a and b are constants. What is the slope of line p?", images: [], type: "mc", choices: {"A": "6", "B": "2", "C": "-2", "D": "-6"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 280, stem: "Which expression is equivalent to a^(11/12), where a > 0?", images: [], type: "mc", choices: {"A": "the 12th root of a^132", "B": "the 144th root of a^132", "C": "the 121st root of a^132", "D": "the 11th root of a^132"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 281, stem: "Which of the following is equivalent to 2x^3 + 4?", images: [], type: "mc", choices: {"A": "4(x^3 + 4)", "B": "4(x^3 + 2)", "C": "2(x^3 + 4)", "D": "2(x^3 + 2)"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 282, stem: "The function k is defined by k(x) = x^3 + 110. What is the value of k(x) when x = 2?", images: [], type: "mc", choices: {"A": "118", "B": "116", "C": "115", "D": "110"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 283, stem: "For the function f, f(0) = 86, and for each increase in x by 1, the value of f(x) decreases by 80%. What is the value of f(2)?", images: [], type: "grid", choices: null, answer: "3.44|86/25", domain: "Advanced Math", difficulty: "Hard" },
{ num: 284, stem: "A competitive diver dives from a platform into the water. The graph shown gives the height above the water y, in meters, of the diver x seconds after diving from the platform. What is the best interpretation of the x-intercept of the graph?\n\n[Figure: Graph with x-axis 'Time (seconds)' (0,1,2,3) and y-axis 'Height (meters)' (0,3,6,9,12). Downward-opening curve starts near (0,10), rises slightly to a peak of about y=10 around x=0.1-0.2, curves downward with increasing steepness, crossing the x-axis at approximately x=1.6.]", images: [], type: "mc", choices: {"A": "The diver reaches a maximum height above the water at 1.6 seconds.", "B": "The diver hits the water at 1.6 seconds.", "C": "The diver reaches a maximum height above the water at 0.2 seconds.", "D": "The diver hits the water at 0.2 seconds."}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 285, stem: "The function h is defined by h(x) = 8/(5x + 6). What is the value of h(2)?", images: [], type: "grid", choices: null, answer: ".5|1/2", domain: "Advanced Math", difficulty: "Easy" },
{ num: 286, stem: "M = 1,800(1.02)^t\n\nThe equation above models the number of members, M, of a gym t years after the gym opens. Of the following, which equation models the number of members of the gym q quarter years after the gym opens?", images: [], type: "mc", choices: {"A": "M = 1,800(1.02)^(q/4)", "B": "M = 1,800(1.02)^(4q)", "C": "M = 1,800(1.005)^(4q)", "D": "M = 1,800(1.082)^q"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 287, stem: "A certain college had 3,000 students enrolled in 2015. The college predicts that after 2015, the number of students enrolled each year will be 2% less than the number of students enrolled the year before. Which of the following functions models the relationship between the number of students enrolled, f(x), and the number of years after 2015, x?", images: [], type: "mc", choices: {"A": "f(x) = 0.02(3,000)^x", "B": "f(x) = 0.98(3,000)^x", "C": "f(x) = 3,000(0.02)^x", "D": "f(x) = 3,000(0.98)^x"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 288, stem: "y = x + 9\ny = x^2 + 16x + 63\n\nA solution to the given system of equations is (x, y). What is the greatest possible value of x?", images: [], type: "mc", choices: {"A": "-6", "B": "7", "C": "9", "D": "63"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 289, stem: "The function f(x) = 200,000(1.21)^x gives a company's predicted annual revenue, in dollars, x years after the company started selling light bulbs online, where 0 < x <= 10. What is the best interpretation of the statement \"f(5) is approximately equal to 518,748\" in this context?", images: [], type: "mc", choices: {"A": "5 years after the company started selling light bulbs online, its predicted annual revenue is approximately 518,748 dollars.", "B": "5 years after the company started selling light bulbs online, its predicted annual revenue will have increased by a total of approximately 518,748 dollars.", "C": "When the company's predicted annual revenue is approximately 518,748 dollars, it is 5 times the predicted annual revenue for the previous year.", "D": "When the company's predicted annual revenue is approximately 518,748 dollars, it is 5% greater than the predicted annual revenue for the previous year."}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 290, stem: "(x+9)(x-9)/(x+9) = 7\n\nWhat is the solution to the given equation?", images: [], type: "mc", choices: {"A": "7", "B": "9", "C": "16", "D": "63"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 291, stem: "20/p = 20/q - 20/r - 20/s\n\nThe given equation relates the positive variables p, q, r, and s. Which of the following is equivalent to q?", images: [], type: "mc", choices: {"A": "p + r + s", "B": "20(p + r + s)", "C": "prs/(pr + ps + rs)", "D": "prs/(20p + 20r + 20s)"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 292, stem: "The sum of -2x^2 + x + 31 and 3x^2 + 7x - 8 can be written in the form ax^2 + bx + c, where a, b, and c are constants. What is the value of a + b + c?", images: [], type: "grid", choices: null, answer: "32", domain: "Advanced Math", difficulty: "Medium" },
{ num: 293, stem: "(1/2 x + 3/2)(3/2 x + 1/2)\n\nThe expression above is equivalent to ax^2 + bx + c, where a, b, and c are constants. What is the value of b?", images: [], type: "grid", choices: null, answer: "5/2|2.5", domain: "Advanced Math", difficulty: "Medium" },
{ num: 294, stem: "For the quadratic function f, the table shows three values of x and their corresponding values of f(x). Which equation defines f?\n\n[Figure: Table: first row (header) x values 24, 30, 32. Second row: corresponding f(x) values -8, -8, 8.]", images: [], type: "mc", choices: {"A": "f(x) = (x-24)(x-30) + 4", "B": "f(x) = (x-24)(x-30) - 8", "C": "f(x) = (x-8)(x-32) + 32", "D": "f(x) = (x-8)(x-32) - 32"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 295, stem: "The functions f and g are defined by the given equations, where x >= 0. Which of the following equations displays, as a constant or coefficient, the maximum value of the function it defines, where x >= 0?\nI. f(x) = 33(0.4)^(x+3)\nII. g(x) = 33(0.16)(0.4)^(x-2)", images: [], type: "mc", choices: {"A": "I only", "B": "II only", "C": "I and II", "D": "Neither I nor II"}, answer: "B", domain: "Advanced Math", difficulty: "Hard" },
{ num: 296, stem: "The function f is defined by f(x) = ax^2 + bx + c, where a, b, and c are constants. The graph of y = f(x) in the xy-plane passes through the points (7, 0) and (-3, 0). If a is an integer greater than 1, which of the following could be the value of a + b?", images: [], type: "mc", choices: {"A": "-6", "B": "-3", "C": "4", "D": "5"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 297, stem: "Blood volume, V_B, in a human can be determined using the equation V_B = V_P / (1 - H), where V_P is the plasma volume and H is the hematocrit (the fraction of blood volume that is red blood cells). Which of the following correctly expresses the hematocrit in terms of the blood volume and the plasma volume?", images: [], type: "mc", choices: {"A": "H = 1 - V_P/V_B", "B": "H = V_B/V_P", "C": "H = 1 + V_B/V_P", "D": "H = V_B - V_P"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 298, stem: "k^2 - 53 = 91\n\nWhat is the positive solution to the given equation?", images: [], type: "mc", choices: {"A": "144", "B": "72", "C": "38", "D": "12"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 299, stem: "A model predicts that the population of Bergen was 15,000 in 2005. The model also predicts that each year for the next 5 years, the population p increased by 4% of the previous year's population. Which equation best represents this model, where x is the number of years after 2005, for x <= 5?", images: [], type: "mc", choices: {"A": "p = 0.96(15,000)^x", "B": "p = 1.04(15,000)^x", "C": "p = 15,000(0.96)^x", "D": "p = 15,000(1.04)^x"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 300, stem: "-54/w = 6\n\nWhat is the solution to the given equation?", images: [], type: "grid", choices: null, answer: "-9", domain: "Advanced Math", difficulty: "Medium" },
{ num: 301, stem: "P = W/t\n\nThe power P produced by a machine is represented by the equation above, where W is the work performed during an amount of time t. Which of the following correctly expresses W in terms of P and t?", images: [], type: "mc", choices: {"A": "W = Pt", "B": "W = P/t", "C": "W = t/P", "D": "W = P + t"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 302, stem: "x + y = 17\nxy = 72\n\nIf one solution to the system of equations above is (x, y), what is one possible value of x?", images: [], type: "grid", choices: null, answer: "8|9", domain: "Advanced Math", difficulty: "Medium" },
{ num: 303, stem: "Which expression is equivalent to (h^15 q^7)/(h^5 q^21), where h > 0 and q > 0?", images: [], type: "mc", choices: {"A": "h^10/q^14", "B": "h^3/q^3", "C": "h^10 q^14", "D": "h^3 q^3"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 304, stem: "Which expression is equivalent to 5x^5 - 6x^4 + 8x^3?", images: [], type: "mc", choices: {"A": "x^4(5x - 6)", "B": "x^3(5x^2 - 6x + 8)", "C": "8x^3(5x^2 - 6x + 1)", "D": "6x^5(-6x^4 + 8x^3 + 1)"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 305, stem: "A rubber ball bounces upward one-half the height that it falls each time it hits the ground. If the ball was originally dropped from a distance of 20.0 feet above the ground, what was its maximum height above the ground, in feet, between the third and fourth time it hit the ground?", images: [], type: "grid", choices: null, answer: "2.5|5/2", domain: "Advanced Math", difficulty: "Medium" },
{ num: 306, stem: "The function f is defined by f(x) = 6 + sqrt(x). What is the value of f(36)?", images: [], type: "grid", choices: null, answer: "12", domain: "Advanced Math", difficulty: "Easy" },
{ num: 307, stem: "The function f(x) = 240,000(1.22)^x gives a company's predicted annual revenue, in dollars, x years after the company started selling jewelry online, where 0 < x <= 10. What is the best interpretation of the statement \"f(5) is approximately equal to 648,650\" in this context?", images: [], type: "mc", choices: {"A": "5 years after the company started selling jewelry online, its predicted annual revenue is approximately 648,650 dollars.", "B": "5 years after the company started selling jewelry online, its predicted annual revenue will have increased by a total of approximately 648,650 dollars.", "C": "When the company's predicted annual revenue is approximately 648,650 dollars, it is 5 times the predicted annual revenue for the previous year.", "D": "When the company's predicted annual revenue is approximately 648,650 dollars, it is 5% greater than the predicted annual revenue for the previous year."}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 308, stem: "Which expression is equivalent to 9x^2 + 5x?", images: [], type: "mc", choices: {"A": "x(9x + 5)", "B": "5x(9x + 1)", "C": "9x(x + 5)", "D": "x^2(9x + 5)"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 309, stem: "D = T - (9/25)(100 - H)\n\nThe formula above can be used to approximate the dew point D, in degrees Fahrenheit, given the temperature T, in degrees Fahrenheit, and the relative humidity of H percent, where H > 50. Which of the following expresses the relative humidity in terms of the temperature and the dew point?", images: [], type: "mc", choices: {"A": "H = (25/9)(D - T) + 100", "B": "H = (25/9)(D - T) - 100", "C": "H = (25/9)(D + T) + 100", "D": "H = (25/9)(D + T) - 100"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 310, stem: "The number of bacteria in a liquid medium doubles every day. There are 44,000 bacteria in the liquid medium at the start of an observation. Which represents the number of bacteria, y, in the liquid medium t days after the start of the observation?", images: [], type: "mc", choices: {"A": "y = (1/2)(44,000)^t", "B": "y = 2(44,000)^t", "C": "y = 44,000(1/2)^t", "D": "y = 44,000(2)^t"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 311, stem: "x - 29 = (x - a)(x - 29)\n\nWhich of the following are solutions to the given equation, where a is a constant and a > 30?\nI. a\nII. a + 1\nIII. 29", images: [], type: "mc", choices: {"A": "I and II only", "B": "I and III only", "C": "II and III only", "D": "I, II, and III"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 312, stem: "r/38 = s + t\n\nThe given equation relates the quantities r, s, and t. Which equation correctly expresses r in terms of s and t?", images: [], type: "mc", choices: {"A": "r = s + t + 38", "B": "r = s + t - 38", "C": "r = 38(s + t)", "D": "r = (s + t)/38"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 313, stem: "Which of the following expressions is equivalent to 2a^2(a + 3)?", images: [], type: "mc", choices: {"A": "5a^3", "B": "8a^5", "C": "2a^3 + 3", "D": "2a^3 + 6a^2"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 314, stem: "Which of the following is equivalent to (a + b/2)^2?", images: [], type: "mc", choices: {"A": "a^2 + b^2/2", "B": "a^2 + b^2/4", "C": "a^2 + ab/2 + b^2/2", "D": "a^2 + ab + b^2/4"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 315, stem: "f(x) = x^2 - 18x - 360\n\nIf the given function f is graphed in the xy-plane, where y = f(x), what is an x-intercept of the graph?", images: [], type: "mc", choices: {"A": "(-12, 0)", "B": "(-30, 0)", "C": "(-360, 0)", "D": "(12, 0)"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 316, stem: "The quadratic function graphed above models a particular measure of plant diversity as a function of the elevation in a region of Switzerland. According to the model, which of the following is closest to the elevation, in meters, at which plant diversity is greatest?\n\n[Figure: Downward-opening parabola on a grid with y-axis 'Measure of plant diversity' labeled 0 to 14,000 (increments of 2,000) and x-axis 'Elevation (meters)' labeled 0 to 3,000 (increments of 500). The curve starts near (0, 10,000), rises to a maximum (vertex) of about y = 13,500 at approximately x = 1,250, then decreases, crossing the x-axis (y = 0) near x = 2,900-3,000.]", images: [], type: "mc", choices: {"A": "13,500", "B": "3,000", "C": "1,250", "D": "250"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 317, stem: "Square P has a side length of x inches. Square Q has a perimeter that is 176 inches greater than the perimeter of square P. The function f gives the area of square Q, in square inches. Which of the following defines f?", images: [], type: "mc", choices: {"A": "f(x) = (x + 44)^2", "B": "f(x) = (x + 176)^2", "C": "f(x) = (176x + 44)^2", "D": "f(x) = (176x + 176)^2"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 318, stem: "y = 2x^2 - 21x + 64\ny = 3x + a\n\nIn the given system of equations, a is a constant. The graphs of the equations in the given system intersect at exactly one point, (x, y), in the xy-plane. What is the value of x?", images: [], type: "mc", choices: {"A": "-8", "B": "-6", "C": "6", "D": "8"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 319, stem: "The surface area of a cube is 6(a/4)^2, where a is a positive constant. Which of the following gives the perimeter of one face of the cube?", images: [], type: "mc", choices: {"A": "a/4", "B": "a", "C": "4a", "D": "6a"}, answer: "B", domain: "Advanced Math", difficulty: "Hard" },
{ num: 320, stem: "What is the y-coordinate of the y-intercept of the graph shown?\n\n[Figure: Graph on a grid with both axes labeled from -8 to 8 (gridlines every 2 units, origin O marked). The curve has two separate branches (a rational/reciprocal-type function): the right branch passes through the y-axis at (0, 3) and decreases, curving down and flattening as it approaches the x-axis toward the right edge (approaching y near 0-1 as x approaches 8). The left branch runs roughly flat near y = -3 to -4 from about x = -8 to x = -3, then drops steeply downward (toward y = -8 and beyond) as x approaches about -1, suggesting a vertical asymptote between x = -2 and x = -1.]", images: [], type: "grid", choices: null, answer: "3", domain: "Advanced Math", difficulty: "Easy" },
{ num: 321, stem: "The function f is defined by f(x) = 7x^3. In the xy-plane, the graph of y = g(x) is the result of shifting the graph of y = f(x) down 2 units. Which equation defines function g?", images: [], type: "mc", choices: {"A": "g(x) = (7/2)x^3", "B": "g(x) = 7x^(3/2)", "C": "g(x) = 7x^3 + 2", "D": "g(x) = 7x^3 - 2"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 322, stem: "The table shows three values of x and their corresponding values of y for the equation y = 4(2)^x + 3. In the table, a is a constant. What is the value of a?\n\n[Figure: Two-column table with header row x, y. Data rows: (1, 11), (2, 19), (3, a).]", images: [], type: "mc", choices: {"A": "67", "B": "35", "C": "32", "D": "27"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 323, stem: "The equation 12t + b = c relates the variables t, b, and c. Which of the following correctly expresses the value of c - b in terms of t?", images: [], type: "mc", choices: {"A": "t/12", "B": "t", "C": "t + 1/12", "D": "12t"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 324, stem: "The graph of the exponential function f is shown, where y = f(x). The y-intercept of the graph is (0, y). What is the value of y?\n\n[Figure: Exponential growth curve on a grid with x-axis from -1 to 1 and y-axis labeled 0 through 12 (increments of 1, gridlines at each integer). The curve is near-flat and close to the x-axis for negative x, crosses the y-axis at (0, 3), then rises steeply and increases rapidly as x approaches 1, exiting near the top of the graph (around y = 12) close to x = 1.]", images: [], type: "grid", choices: null, answer: "3", domain: "Advanced Math", difficulty: "Easy" },
{ num: 325, stem: "x^2 = 6x + y\ny = -6x + 36\n\nA solution to the given system of equations is (x, y). Which of the following is a possible value of xy?", images: [], type: "mc", choices: {"A": "0", "B": "6", "C": "12", "D": "36"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 326, stem: "According to Moore's law, the number of transistors included on microprocessors doubles every 2 years. In 1985, a microprocessor was introduced that had 275,000 transistors. Based on this information, in which of the following years does Moore's law estimate the number of transistors to reach 1.1 million?", images: [], type: "mc", choices: {"A": "1987", "B": "1989", "C": "1991", "D": "1994"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 327, stem: "The function f is defined by f(x) = 270(0.1)^x. What is the value of f(0)?", images: [], type: "mc", choices: {"A": "0", "B": "1", "C": "27", "D": "270"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 328, stem: "The function g is defined by g(x) = x^2 + 9. For which value of x is g(x) = 25?", images: [], type: "mc", choices: {"A": "4", "B": "5", "C": "9", "D": "13"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 329, stem: "Which expression is equivalent to (x)^(1/14), where x > 0?", images: [], type: "mc", choices: {"A": "(1/14)*x", "B": "the 14th root of x", "C": "14*x", "D": "(x)^14"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 330, stem: "x^2 + x - 12 = 0\n\nIf a is a solution of the equation above and a > 0, what is the value of a?", images: [], type: "grid", choices: null, answer: "3", domain: "Advanced Math", difficulty: "Medium" },
{ num: 331, stem: "Which expression is equivalent to 5x^2 - 50xy^2?", images: [], type: "mc", choices: {"A": "5x(x - 10y^2)", "B": "5x(x - 50y^2)", "C": "5x^2(10xy^2)", "D": "5x^2(50xy^2)"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 332, stem: "f(x) = x^2 + 4\n\nThe function f is defined as shown. Which of the following graphs in the xy-plane could be the graph of y = f(x)?\n\n[Figure: Four small answer-choice graphs (A-D), each an upward-opening parabola plotted on xy-axes ranging from about -8 to 8. Only choice D has its vertex correctly at (0, 4), matching the minimum of f(x) = x^2 + 4; choices A, B, and C show vertices at incorrect locations (below the x-axis, at the origin, or off the y-axis).]", images: [], type: "mc", choices: {"A": "Upward-opening parabola on axes from -8 to 8, vertex located below the x-axis (negative y-value), not at (0,4).", "B": "Upward-opening parabola on axes from -8 to 8, vertex located at or near the origin (0, 0), not at (0,4).", "C": "Upward-opening parabola on axes from -8 to 8, vertex shifted away from the y-axis (not centered at x = 0) and/or at a y-value other than 4.", "D": "Upward-opening, narrow parabola on axes from -8 to 8 with vertex exactly at (0, 4) on the y-axis, matching minimum value of f(x) = x^2 + 4."}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 333, stem: "The function f(x) = 206(1.034)^x models the value, in dollars, of a certain bank account by the end of each year from 1957 through 1972, where x is the number of years after 1957. Which of the following is the best interpretation of \"f(5) is approximately equal to 243\" in this context?", images: [], type: "mc", choices: {"A": "The value of the bank account is estimated to be approximately 5 dollars greater in 1962 than in 1957.", "B": "The value of the bank account is estimated to be approximately 243 dollars in 1962.", "C": "The value, in dollars, of the bank account is estimated to be approximately 5 times greater in 1962 than in 1957.", "D": "The value of the bank account is estimated to increase by approximately 243 dollars every 5 years between 1957 and 1972."}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 334, stem: "Which expression is equivalent to (x^2 + 11)^2 + (x - 5)(x + 5)?", images: [], type: "mc", choices: {"A": "x^4 + 23x^2 - 14", "B": "x^4 + 23x^2 + 96", "C": "x^4 + 12x^2 + 121", "D": "x^4 + x^2 + 146"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 335, stem: "The graph gives the estimated population y, in thousands, of a town x years since 2003, where 0 <= x <= 5. Which of the following best describes the increase in the estimated population from x = 0 to x = 1?\n\n[Figure: An increasing, concave-up curve on a grid, x-axis 0-5, y-axis 0-12. Curve starts at approximately (0,6), rises through about (1,9), continues to about (2,12). Only x=0 to about x=2 is shown.]", images: [], type: "mc", choices: {"A": "The estimated population at x = 1 is 0.5 times the estimated population at x = 0.", "B": "The estimated population at x = 1 is 1.5 times the estimated population at x = 0.", "C": "The estimated population at x = 1 is 2.5 times the estimated population at x = 0.", "D": "The estimated population at x = 1 is 3.5 times the estimated population at x = 0."}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 336, stem: "In the xy-plane, the graph of y = 3x^2 - 14x intersects the graph of y = x at the points (0, 0) and (a, a). What is the value of a?", images: [], type: "grid", choices: null, answer: "5", domain: "Advanced Math", difficulty: "Hard" },
{ num: 337, stem: "h(t) = -16t^2 + 110t + 72. The function above models the height h, in feet, of an object above ground t seconds after being launched straight up in the air. What does the number 72 represent in the function?", images: [], type: "mc", choices: {"A": "The initial height, in feet, of the object", "B": "The maximum height, in feet, of the object", "C": "The initial speed, in feet per second, of the object", "D": "The maximum speed, in feet per second, of the object"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 338, stem: "x^2 - 5x - 24 = 0. What is the sum of the solutions to the given equation?", images: [], type: "grid", choices: null, answer: "5", domain: "Advanced Math", difficulty: "Medium" },
{ num: 339, stem: "A model predicts that the population of Bergen was 15,000 in 2005. The model also predicts that each year for the next 5 years, the population p increased by 4% of the previous year's population. Which equation best represents this model, where x is the number of years after 2005, for x <= 5?", images: [], type: "mc", choices: {"A": "p = 0.96(15,000)^x", "B": "p = 1.04(15,000)^x", "C": "p = 15,000(0.96)^x", "D": "p = 15,000(1.04)^x"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 340, stem: "N(d) = 115(0.90)^d. The function N defined above can be used to model the number of species of brachiopods at various ocean depths d, where d is in hundreds of meters. Which of the following does the model predict?", images: [], type: "mc", choices: {"A": "For every increase in depth by 1 meter, the number of brachiopod species decreases by 115.", "B": "For every increase in depth by 1 meter, the number of brachiopod species decreases by 10%.", "C": "For every increase in depth by 100 meters, the number of brachiopod species decreases by 115.", "D": "For every increase in depth by 100 meters, the number of brachiopod species decreases by 10%."}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 341, stem: "y = 576^(2x+2). The graph of the given equation in the xy-plane has a y-intercept of (r, s). Which of the following equivalent equations displays the value of s as a constant, a coefficient, or the base?", images: [], type: "mc", choices: {"A": "y = 331,776^(x+1)", "B": "y = 24^(4x+4)", "C": "y = (1/24)(24)^(4x+5)", "D": "y = (1/576)(576)^(2x+3)"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 342, stem: "Which expression is equivalent to (y+12)/(x-8) + y(x-8)/(x^2y-8xy)?", images: [], type: "mc", choices: {"A": "(xy+y+4)/(x^3y-16x^2y+64xy)", "B": "(xy+9y+12)/(x^2y-8xy+x-8)", "C": "(xy^2+13xy-8y)/(x^2y-8xy)", "D": "(xy^2+13xy-8y)/(x^3y-16x^2y+64xy)"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 343, stem: "One of the factors of 2x^3 + 42x^2 + 208x is x + b, where b is a positive constant. What is the smallest possible value of b?", images: [], type: "grid", choices: null, answer: "8", domain: "Advanced Math", difficulty: "Hard" },
{ num: 344, stem: "y = 3,600(a)^x. The given equation, where a is a positive constant, gives the predicted number of bacteria, y, in a growth medium x hours after the number of bacteria was initially measured. According to the equation, what was the predicted number of bacteria initially measured in the growth medium?", images: [], type: "grid", choices: null, answer: "3600", domain: "Advanced Math", difficulty: "Medium" },
{ num: 345, stem: "x + 7 = 10. (x+7)^2 = y. Which ordered pair (x, y) is a solution to the given system of equations?", images: [], type: "mc", choices: {"A": "(3, 100)", "B": "(3, 3)", "C": "(3, 10)", "D": "(3, 70)"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 346, stem: "The function h is defined by h(x) = a^x + b, where a and b are positive constants. The graph of y = h(x) in the xy-plane passes through the points (0, 10) and (-2, 325/36). What is the value of ab?", images: [], type: "mc", choices: {"A": "1/4", "B": "1/2", "C": "54", "D": "60"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 347, stem: "T = 0.01(P - 40,000). In a city, the property tax T, in dollars, is calculated using the formula above, where P is the value of the property, in dollars. Which of the following expresses the value of the property in terms of the property tax?", images: [], type: "mc", choices: {"A": "P = 100T - 400", "B": "P = 100T + 400", "C": "P = 100T - 40,000", "D": "P = 100T + 40,000"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 348, stem: "The function f is defined by f(x) = a*sqrt(x + b), where a and b are constants. In the xy-plane, the graph of y = f(x) passes through the point (-24, 0), and f(24) < 0. Which of the following must be true?", images: [], type: "mc", choices: {"A": "f(0) = 24", "B": "f(0) = -24", "C": "a > b", "D": "a < b"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 349, stem: "The table shows three values of x and their corresponding values of y, where y = f(x) + 4 and f is a quadratic function. What is the y-coordinate of the y-intercept of the graph of y = f(x) in the xy-plane?\n\n[Figure: Data table with columns x and y, rows: (21,-8), (23,8), (25,-8).]", images: [], type: "grid", choices: null, answer: "-2112", domain: "Advanced Math", difficulty: "Hard" },
{ num: 350, stem: "x^2/25 = 36. What is a solution to the given equation?", images: [], type: "mc", choices: {"A": "6", "B": "30", "C": "450", "D": "900"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 351, stem: "g(x) = 11(1/12)^x. If the given function g is graphed in the xy-plane, where y = g(x), what is the y-intercept of the graph?", images: [], type: "mc", choices: {"A": "(0, 11)", "B": "(0, 132)", "C": "(0, 1)", "D": "(0, 12)"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 352, stem: "(9x^4 + 8x^3) - (7x^3 + 5x^2) - (3x^2 + x). The given expression can be written in the form 9x^4 + x^3 + ax^2 - x, where a is a constant. What is the value of a?", images: [], type: "mc", choices: {"A": "-8", "B": "-2", "C": "2", "D": "8"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 353, stem: "Which expression is equivalent to 9x^2 + 7x^2 + 9x?", images: [], type: "mc", choices: {"A": "63x^4 + 9x", "B": "9x^2 + 16x", "C": "25x^5", "D": "16x^2 + 9x"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 354, stem: "P = N(19 - C)\n\nThe given equation relates the positive numbers P, N, and C. Which equation correctly expresses C in terms of P and N?", images: [], type: "mc", choices: {"A": "C = (19 + P)/N", "B": "C = (19 - P)/N", "C": "C = 19 + P/N", "D": "C = 19 - P/N"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 355, stem: "Which expression is equivalent to (2x^2 + x - 9) + (x^2 + 6x + 1)?", images: [], type: "mc", choices: {"A": "2x^2 + 7x + 10", "B": "2x^2 + 6x - 8", "C": "3x^2 + 7x - 10", "D": "3x^2 + 7x - 8"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 356, stem: "What is an x-coordinate of an x-intercept of the graph of y = 3(x - 14)(x + 5)(x + 4) in the xy-plane?", images: [], type: "grid", choices: null, answer: "14|-5|-4", domain: "Advanced Math", difficulty: "Medium" },
{ num: 357, stem: "The area A, in square centimeters, of a rectangular painting can be represented by the expression w(w + 29), where w is the width, in centimeters, of the painting. Which expression represents the length, in centimeters, of the painting?", images: [], type: "mc", choices: {"A": "w", "B": "29", "C": "(w + 29)", "D": "w(w + 29)"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 358, stem: "A quadratic function models the height, in feet, of an object above the ground in terms of the time, in seconds, after the object is launched off an elevated surface. The model indicates the object has an initial height of 10 feet above the ground and reaches its maximum height of 1,034 feet above the ground 8 seconds after being launched. Based on the model, what is the height, in feet, of the object above the ground 10 seconds after being launched?", images: [], type: "mc", choices: {"A": "234", "B": "778", "C": "970", "D": "1,014"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 359, stem: "y = -(1/4)x^2 + 2x + 29\n\nThe given equation models a company's scheduled deliveries over 8 months, where y is the estimated number of scheduled deliveries x months after the end of May 2012, where 0 <= x <= 8. Which statement is the best interpretation of the y-intercept of the graph of this equation in the xy-plane?", images: [], type: "mc", choices: {"A": "At the end of May 2012, the estimated number of scheduled deliveries was 0.", "B": "At the end of May 2012, the estimated number of scheduled deliveries was 29.", "C": "At the end of June 2012, the estimated number of scheduled deliveries was 0.", "D": "At the end of June 2012, the estimated number of scheduled deliveries was 29."}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 360, stem: "The graph of a system of a linear equation and a nonlinear equation is shown. What is the solution (x, y) to this system?\n\n[Figure: xy-plane grid, x-axis about -8 to 6, y-axis about -6 to 8. A curved (rational-looking) graph descends steeply from the upper-left near x=-3, passes through the intersection point (-2,6), then flattens toward a horizontal asymptote near y=5 as x increases toward 6. A straight line also passes through (-2,6), sloping downward, crossing the y-axis around y=4, crossing the x-axis near x=4.5, continuing to about (6,-3). Intersect at (-2,6).]", images: [], type: "mc", choices: {"A": "(6, 0)", "B": "(-2, 6)", "C": "(0, -2)", "D": "(0, 0)"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 361, stem: "The equation (x^2 + 6x - 7)/(x + 7) = ax + d is true for all x != -7, where a and d are integers. What is the value of a + d?", images: [], type: "mc", choices: {"A": "-6", "B": "-1", "C": "0", "D": "1"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 362, stem: "Which expression is equivalent to (8x^3 + 8) - (x^3 - 2)?", images: [], type: "mc", choices: {"A": "8x^3 + 6", "B": "7x^3 + 10", "C": "8x^3 + 10", "D": "7x^3 + 6"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 363, stem: "Which of the following expressions is equivalent to (x^2 - 2x - 5)/(x - 3)?", images: [], type: "mc", choices: {"A": "x - 5 - 20/(x - 3)", "B": "x - 5 - 10/(x - 3)", "C": "x + 1 - 8/(x - 3)", "D": "x + 1 - 2/(x - 3)"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 364, stem: "x^2 + 7x + 5 = 0\n\nOne solution to the given equation can be written as x = (-7 + sqrt(k))/2, where k is a constant. What is the value of k?", images: [], type: "grid", choices: null, answer: "29", domain: "Advanced Math", difficulty: "Hard" },
{ num: 365, stem: "A company opens an account with an initial balance of $36,100.00. The account earns interest, and no additional deposits or withdrawals are made. The account balance is given by an exponential function A, where A(t) is the account balance, in dollars, t years after the account is opened. The account balance after 13 years is $68,071.93. Which equation could define A?", images: [], type: "mc", choices: {"A": "A(t) = 36,100.00(1.05)^t", "B": "A(t) = 31,971.93(1.05)^t", "C": "A(t) = 31,971.93(0.05)^t", "D": "A(t) = 36,100.00(0.05)^t"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 366, stem: "Which of the following is equivalent to the sum of 3x^4 + 2x^3 and 4x^4 + 7x^3?", images: [], type: "mc", choices: {"A": "16x^14", "B": "7x^8 + 9x^6", "C": "12x^4 + 14x^3", "D": "7x^4 + 9x^3"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 367, stem: "An investment account was opened with an initial value of $890. The value of the account doubled every 10 years. Which equation represents the value of the account M(t), in dollars, t years after the account was opened?", images: [], type: "mc", choices: {"A": "M(t) = 890(1/2)^(t/10)", "B": "M(t) = 890(1/10)^(t/2)", "C": "M(t) = 890(2)^(t/10)", "D": "M(t) = 890(10)^(t/2)"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 368, stem: "(7532 + 100y^2) + 10(10y^2 - 110)\n\nThe expression above can be written in the form ay^2 + b, where a and b are constants. What is the value of a + b?", images: [], type: "grid", choices: null, answer: "6632", domain: "Advanced Math", difficulty: "Hard" },
{ num: 369, stem: "The y-intercept of the graph of y = x^2 + 31 in the xy-plane is (0, y). What is the value of y?", images: [], type: "grid", choices: null, answer: "31", domain: "Advanced Math", difficulty: "Easy" },
{ num: 370, stem: "The table above gives the values of the function f for some values of x. Which of the following equations could define f?\n\n[Figure: Data table with columns x and f(x): (0,5), (1,5/2), (2,5/4), (3,5/8). Each successive value is half the previous, indicating exponential decay.]", images: [], type: "mc", choices: {"A": "f(x) = 5(2^(x+1))", "B": "f(x) = 5(2^x)", "C": "f(x) = 5(2^(-(x+1)))", "D": "f(x) = 5(2^(-x))"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 371, stem: "The expression 6 * fifthroot(3^5 * x^45) * eighthroot(2^8 * x) is equivalent to ax^b, where a and b are positive constants and x > 1. What is the value of a + b?", images: [], type: "grid", choices: null, answer: "361/8|45.12|45.13", domain: "Advanced Math", difficulty: "Hard" },
{ num: 372, stem: "2x^2 + 5x - 12\n\nIf the given expression is rewritten in the form (2x - 3)(x + k), where k is a constant, what is the value of k?", images: [], type: "grid", choices: null, answer: "4", domain: "Advanced Math", difficulty: "Medium" },
{ num: 373, stem: "v^2 = LT/m\n\nThe formula above expresses the square of the speed v of a wave moving along a string in terms of tension T, mass m, and length L of the string. What is T in terms of m, v, and L?", images: [], type: "mc", choices: {"A": "T = mv^2/L", "B": "T = m/(v^2*L)", "C": "T = mL/v^2", "D": "T = L/(mv^2)"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 374, stem: "For the polynomial function f, the graph of y = f(x) in the xy-plane passes through the points (-5, 0), (1, 0), and (4, 0). Which of the following must be a factor of f(x)?", images: [], type: "mc", choices: {"A": "x + 1", "B": "x + 4", "C": "x - 1", "D": "x - 5"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 375, stem: "The function f is defined by f(x) = 5(1/4 - x)^2 + 11/4. What is the value of f(1/4)?", images: [], type: "grid", choices: null, answer: "11/4|2.75", domain: "Advanced Math", difficulty: "Medium" },
{ num: 376, stem: "64x^2 - (16a + 4b)x + ab = 0\n\nIn the given equation, a and b are positive constants. The sum of the solutions to the given equation is k(4a + b), where k is a constant. What is the value of k?", images: [], type: "grid", choices: null, answer: "1/16|.0625", domain: "Advanced Math", difficulty: "Hard" },
{ num: 377, stem: "|x - 2| = 9\n\nWhat is one possible solution to the given equation?", images: [], type: "grid", choices: null, answer: "11|-7", domain: "Advanced Math", difficulty: "Easy" },
{ num: 378, stem: "The graph shows the predicted value y, in dollars, of a certain sport utility vehicle x years after it is first purchased. Which of the following is closest to the predicted value of the sport utility vehicle 3 years after it is first purchased?\n\n[Figure: Graph, x-axis 'Years after purchase' 0-5, y-axis 'Value (dollars)' 0-30,000. Smooth decreasing, concave-up curve (exponential decay) starts at approx (0,23,000), passes through approx (1,19,320), (3,13,632), ends at approx (5,9,619).]", images: [], type: "mc", choices: {"A": "$9,619", "B": "$13,632", "C": "$19,320", "D": "$23,000"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 379, stem: "Which expression represents the product of (x^-6 y^3 z^5) and (x^4 z^5 + y^8 z^-7)?", images: [], type: "mc", choices: {"A": "x^-2 z^10 + y^11 z^-2", "B": "x^-2 z^10 + x^-6 z^-2", "C": "x^-2 y^3 z^10 + y^8 z^-7", "D": "x^-2 y^3 z^10 + x^-6 y^11 z^-2"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 380, stem: "y = x^2\n2y + 6 = 2(x + 3)\n\nIf (x, y) is a solution of the system of equations above and x > 0, what is the value of xy?", images: [], type: "mc", choices: {"A": "1", "B": "2", "C": "3", "D": "9"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 381, stem: "Function f is defined by f(x) = (x + 6)(x + 5)(x + 1). Function g is defined by g(x) = f(x - 1). The graph of y = g(x) in the xy-plane has x-intercepts at (a, 0), (b, 0), and (c, 0), where a, b, and c are distinct constants. What is the value of a + b + c?", images: [], type: "mc", choices: {"A": "-15", "B": "-9", "C": "11", "D": "15"}, answer: "B", domain: "Advanced Math", difficulty: "Hard" },
{ num: 382, stem: "If a = c + d, which of the following is equivalent to the expression x^2 - c^2 - 2cd - d^2?", images: [], type: "mc", choices: {"A": "(x + a)^2", "B": "(x - a)^2", "C": "(x + a)(x - a)", "D": "x^2 - ax - a^2"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 383, stem: "x^2 - 40x - 10 = 0\n\nWhat is the sum of the solutions to the given equation?", images: [], type: "mc", choices: {"A": "0", "B": "5", "C": "10", "D": "40"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 384, stem: "x = 8\ny = x^2 + 8\n\nThe graphs of the equations in the given system of equations intersect at the point (x, y) in the xy-plane. What is the value of y?", images: [], type: "mc", choices: {"A": "8", "B": "24", "C": "64", "D": "72"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 385, stem: "The function g is defined by g(x) = |x + 18|. What is the value of g(4)?", images: [], type: "mc", choices: {"A": "-18", "B": "-4", "C": "14", "D": "22"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 386, stem: "Which quadratic equation has exactly one distinct real solution?", images: [], type: "mc", choices: {"A": "(x + 15)^2 = 0", "B": "(x + 15)^2 = -45", "C": "(x + 15)^2 = 45", "D": "(x + 15)^2 = 135"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 387, stem: "(2x^3 + 3x)(x^3 - 2x)\n\nWhich of the following is equivalent to the expression above?", images: [], type: "mc", choices: {"A": "x^3 + 5x", "B": "3x^3 + x", "C": "2x^6 - x^4 - 6x^2", "D": "3x^6 - x^4 - 6x^2"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 388, stem: "The exponential function g is defined by g(x) = 19 * a^x, where a is a positive constant. If g(3) = 2,375, what is the value of g(4)?", images: [], type: "grid", choices: null, answer: "11875", domain: "Advanced Math", difficulty: "Medium" },
{ num: 389, stem: "55/(x + 6) = x\n\nWhat is the positive solution to the given equation?", images: [], type: "grid", choices: null, answer: "5", domain: "Advanced Math", difficulty: "Medium" },
{ num: 390, stem: "An egg is thrown from a rooftop. The equation h = -4.9t^2 + 9t + 18 represents this situation, where h is the height of the egg above the ground, in meters, t seconds after it is thrown. According to the equation, what is the height, in meters, from which the egg was thrown?", images: [], type: "grid", choices: null, answer: "18", domain: "Advanced Math", difficulty: "Medium" },
{ num: 391, stem: "Which of the following is equivalent to (1 - p)(1 + p + p^2 + p^3 + p^4 + p^5 + p^6)?", images: [], type: "mc", choices: {"A": "1 - p^8", "B": "1 - p^7", "C": "1 - p^6", "D": "1 - p^5"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 392, stem: "y = x^2 + 3x - 7\ny - 5x + 8 = 0\n\nHow many solutions are there to the system of equations above?", images: [], type: "mc", choices: {"A": "There are exactly 4 solutions.", "B": "There are exactly 2 solutions.", "C": "There is exactly 1 solution.", "D": "There are no solutions."}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 393, stem: "A submersible device is used for ocean research. The function g(x) = -(1/55)(x+19)(x-35) gives the depth below the surface of the ocean, in meters, of the submersible device x minutes after collecting a sample, where x > 0. How many minutes after collecting the sample did it take for the submersible device to reach the surface of the ocean?", images: [], type: "grid", choices: null, answer: "35", domain: "Advanced Math", difficulty: "Hard" },
{ num: 394, stem: "(2x+3) - (x-7)\nWhich of the following is equivalent to the given expression?", images: [], type: "mc", choices: {"A": "x - 4", "B": "3x - 4", "C": "x + 10", "D": "2x^2 + 21"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 395, stem: "The function p is defined by p(n) = 7n^3. What is the value of n when p(n) is equal to 56?", images: [], type: "mc", choices: {"A": "2", "B": "8/3", "C": "7", "D": "8"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 396, stem: "6x^2 + 5x - 7 = 0\nWhat are the solutions to the given equation?", images: [], type: "mc", choices: {"A": "(-5 +- sqrt(25+168)) / 12", "B": "(-6 +- sqrt(25+168)) / 12", "C": "(-5 +- sqrt(36-168)) / 12", "D": "(-6 +- sqrt(36-168)) / 12"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 397, stem: "f(x) = x^2 + bx\ng(x) = 9x^2 - 27x\nFunctions f and g are given, and in function f, b is a constant. If f(x)*g(x) = 9x^4 - 26x^3 - 3x^2, what is the value of b?", images: [], type: "mc", choices: {"A": "-26", "B": "-26/9", "C": "1/9", "D": "9"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 398, stem: "The equation E(t) = 5(1.8)^t gives the estimated number of employees at a restaurant, where t is the number of years since the restaurant opened. Which of the following is the best interpretation of the number 5 in this context?", images: [], type: "mc", choices: {"A": "The estimated number of employees when the restaurant opened", "B": "The increase in the estimated number of employees each year", "C": "The number of years the restaurant has been open", "D": "The percent increase in the estimated number of employees each year"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 399, stem: "The kinetic energy, in joules, of an object with mass 9 kilograms traveling at a speed of v meters per second is given by the function K, where K(v) = (9/2)v^2. Which of the following is the best interpretation of K(34) = 5,202 in this context?", images: [], type: "mc", choices: {"A": "The object traveling at 34 meters per second has a kinetic energy of 5,202 joules.", "B": "The object traveling at 340 meters per second has a kinetic energy of 5,202 joules.", "C": "The object traveling at 5,202 meters per second has a kinetic energy of 34 joules.", "D": "The object traveling at 23,409 meters per second has a kinetic energy of 34 joules."}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 400, stem: "(1/2 x + 3) - (2/3 x - 5)\nWhich of the following is equivalent to the expression above?", images: [], type: "mc", choices: {"A": "-1/6 x + 8", "B": "-1/6 x - 2", "C": "-1/3 x^2 + 1/2 x + 15", "D": "-1/3 x^2 - 9/2 x - 15"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 401, stem: "4x^2/(x^2-9) - 2x/(x+3) = 1/(x-3)\nWhat value of x satisfies the equation above?", images: [], type: "mc", choices: {"A": "-3", "B": "-1/2", "C": "1/2", "D": "3"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 402, stem: "(4x^3 - 5x^2 + 3) - (6x^3 + 2x^2 - x)\nWhich of the following expressions is equivalent to the expression above?", images: [], type: "mc", choices: {"A": "-10x^3 - 3x^2 + x + 3", "B": "-2x^3 - 7x^2 + x + 3", "C": "-2x^3 - 3x^2 + x + 3", "D": "10x^3 - 7x^2 - x + 3"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 403, stem: "x^2 = 64\nWhich of the following values of x satisfies the given equation?", images: [], type: "mc", choices: {"A": "-8", "B": "4", "C": "32", "D": "128"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 404, stem: "7x^2 - 20x - 32 = 0\nWhat is the positive solution to the given equation?", images: [], type: "grid", choices: null, answer: "4", domain: "Advanced Math", difficulty: "Medium" },
{ num: 405, stem: "f(x) = 4x^2 - 50x + 126\nThe given equation defines the function f. For what value of x does f(x) reach its minimum?", images: [], type: "grid", choices: null, answer: "25/4|6.25", domain: "Advanced Math", difficulty: "Hard" },
{ num: 406, stem: "The function f is defined by f(x) = |x - 4x|. What value of a satisfies f(5) - f(a) = -15?", images: [], type: "mc", choices: {"A": "-20", "B": "5", "C": "10", "D": "45"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 407, stem: "h(x) = x^3 + ax^2 + bx + c\nThe function h is defined above, where a, b, and c are integer constants. If the zeros of the function are -5, 6, and 7, what is the value of c?", images: [], type: "grid", choices: null, answer: "210", domain: "Advanced Math", difficulty: "Hard" },
{ num: 408, stem: "The graph of a system of an absolute value function and a linear function is shown. What is the solution (x, y) to this system of two equations?\n\n[Figure: Coordinate grid, x-axis -3 to 10, y-axis 0 to 10. V-shaped absolute value function vertex at (4,2): left ray rises through the intersection point (1,5) continuing up-left; right ray rises through roughly (6,7) toward top right. A straight line rises from lower left near (-3,0) through the same intersection point (1,5) continuing up-right. The graphs cross only at (1,5), the solution.]", images: [], type: "mc", choices: {"A": "(-1, 5)", "B": "(0, 4)", "C": "(1, 5)", "D": "(4, 2)"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 409, stem: "The function f is defined by f(x) = 8*sqrt(x). For what value of x does f(x) = 48?", images: [], type: "mc", choices: {"A": "6", "B": "8", "C": "36", "D": "64"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 410, stem: "Which of the following is equivalent to the fourth root of (x^2 + 8x + 16), where x > 0?", images: [], type: "mc", choices: {"A": "(x+4)^4", "B": "(x+4)^2", "C": "(x+4)", "D": "(x+4)^(1/2)"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 411, stem: "f(x) = (x - 2)(x + 15)\nThe function f is defined by the given equation. For what value of x does f(x) reach its minimum?", images: [], type: "grid", choices: null, answer: "-13/2|-6.5", domain: "Advanced Math", difficulty: "Hard" },
{ num: 412, stem: "The graph of y = f(x) is shown in the xy-plane. The value of f(0) is an integer. What is the value of f(0)?\n\n[Figure: Graph, axes -8 to 8 on both x and y. Rational (hyperbola-type) function with two branches. Right/main branch enters top near x=-2 (around y=8+), decreases smoothly, passes through (0,3), continues decreasing, flattening as x increases toward 8. A second, separate branch appears lower-left, roughly (-8,-8) to (-4,-4).]", images: [], type: "grid", choices: null, answer: "3", domain: "Advanced Math", difficulty: "Easy" },
{ num: 413, stem: "64x^2 + bx + 25 = 0\n\nIn the given equation, b is a constant. For which of the following values of b will the equation have more than one real solution?", images: [], type: "mc", choices: {"A": "-91", "B": "-80", "C": "5", "D": "40"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 414, stem: "f(x) = 9(4)^x\n\nThe function f is defined by the given equation. If g(x) = f(x + 2), which of the following equations defines the function g?", images: [], type: "mc", choices: {"A": "g(x) = 18(4)^x", "B": "g(x) = 144(4)^x", "C": "g(x) = 18(8)^x", "D": "g(x) = 81(16)^x"}, answer: "B", domain: "Advanced Math", difficulty: "Hard" },
{ num: 415, stem: "If a and c are positive numbers, which of the following is equivalent to sqrt((a+c)^3) * sqrt(a+c)?", images: [], type: "mc", choices: {"A": "a + c", "B": "a^2 + c^2", "C": "a^2 + 2ac + c^2", "D": "a^2 c^2"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 416, stem: "The functions f and g are defined by the given equations, where x >= 0. Which of the following equations displays, as a constant or coefficient, the maximum value of the function it defines, where x >= 0?\n\nI. f(x) = 18(1.25)^x + 41\nII. g(x) = 9(0.73)^x", images: [], type: "mc", choices: {"A": "I only", "B": "II only", "C": "I and II", "D": "Neither I nor II"}, answer: "B", domain: "Advanced Math", difficulty: "Hard" },
{ num: 417, stem: "A rectangle has an area of 155 square inches. The length of the rectangle is 4 inches less than 7 times the width of the rectangle. What is the width of the rectangle, in inches?", images: [], type: "grid", choices: null, answer: "5", domain: "Advanced Math", difficulty: "Hard" },
{ num: 418, stem: "f(x) = (x + 7)^2 + 4\n\nThe function f is defined by the given equation. For what value of x does f(x) reach its minimum?", images: [], type: "grid", choices: null, answer: "-7", domain: "Advanced Math", difficulty: "Hard" },
{ num: 419, stem: "The product of a positive number x and the number that is 8 more than x is 180. What is the value of x?", images: [], type: "mc", choices: {"A": "5", "B": "10", "C": "18", "D": "36"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 420, stem: "y = x^2 + 14x + 48\nx + 8 = 11\n\nThe solution to the given system of equations is (x, y). What is the value of y?", images: [], type: "grid", choices: null, answer: "99", domain: "Advanced Math", difficulty: "Medium" },
{ num: 421, stem: "Which expression is equivalent to 15w^2 + 8w?", images: [], type: "mc", choices: {"A": "w(15w + 8)", "B": "8w(15w + 1)", "C": "15w^2(8w + 1)", "D": "23(w^2 + w)"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 422, stem: "The total revenue from sales of a product can be calculated using the formula T = PQ, where T is the total revenue, P is the price of the product, and Q is the quantity of the product sold. Which of the following equations gives the quantity of product sold in terms of P and T?", images: [], type: "mc", choices: {"A": "Q = P/T", "B": "Q = T/P", "C": "Q = PT", "D": "Q = T - P"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 423, stem: "The function f is defined by f(x) = x^3 + 15. What is the value of f(2)?", images: [], type: "mc", choices: {"A": "20", "B": "21", "C": "23", "D": "24"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 424, stem: "f(x) = 272(2)^x\n\nThe function f is defined by the given equation. If h(x) = f(x - 4), which of the following equations defines function h?", images: [], type: "mc", choices: {"A": "h(x) = 17(2)^x", "B": "h(x) = 68(2)^x", "C": "h(x) = 272(16)^x", "D": "h(x) = 272(8)^x"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 425, stem: "The graph shown represents a cubic-type polynomial function. The y-intercept of the graph shown is (x, y). What is the value of y?\n\n[Figure: Graph, x-axis -2 to 10, y-axis 0 to 80. Cubic-shaped curve rises steeply from the y-axis, passing through a marked point at the y-intercept (0,40), continues up to a local max around (2,60), decreases to a local min around (6,28), then rises again, exiting the top near x=8-9.]", images: [], type: "grid", choices: null, answer: "40", domain: "Advanced Math", difficulty: "Easy" },
{ num: 426, stem: "The graph of the polynomial function f, where y = f(x), is shown. The y-intercept of the graph is (0, y). What is the value of y?\n\n[Figure: Graph, x-axis -1 to 1, y-axis 1 down to -12. Broad, nearly flat-topped shape (even-degree polynomial, negative leading coefficient) centered near y-axis at about y=-3 (marked point (0,-3)), descends steeply on both sides reaching about y=-12 near x=-1 and x=1.]", images: [], type: "grid", choices: null, answer: "-3", domain: "Advanced Math", difficulty: "Easy" },
{ num: 427, stem: "y = -1.5\ny = x^2 + 8x + a\n\nIn the given system of equations, a is a positive constant. The system has exactly one distinct real solution. What is the value of a?", images: [], type: "grid", choices: null, answer: "14.5|29/2", domain: "Advanced Math", difficulty: "Hard" },
{ num: 428, stem: "f(x) = (x + 4)(x - 1)(2x - 3)\n\nThe function f is defined above. Which of the following is NOT an x-intercept of the graph of the function in the xy-plane?", images: [], type: "mc", choices: {"A": "(-4, 0)", "B": "(-2/3, 0)", "C": "(1, 0)", "D": "(3/2, 0)"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 429, stem: "Which expression is equivalent to 8 + d^2 + 3?", images: [], type: "mc", choices: {"A": "d^2 + 24", "B": "d^2 + 11", "C": "d^2 + 5", "D": "d^2 - 11"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 430, stem: "The graph of the exponential function f is shown, where y = f(x). The y-intercept of the graph is (0, y). What is the value of y?\n\n[Figure: Graph, x-axis -1 to 1, y-axis -1 to 12. Decreasing exponential function enters top left near x=-1 at about y=12-13, decreases steeply, passes through the y-axis at (0,3), continues decreasing toward y=0 as x approaches 1 (horizontal asymptote at y=0).]", images: [], type: "grid", choices: null, answer: "3", domain: "Advanced Math", difficulty: "Easy" },
{ num: 431, stem: "The quadratic function g models the depth, in meters, below the surface of the water of a seal t minutes after the seal entered the water during a dive. The function estimates that the seal reached its maximum depth of 302.4 meters 6 minutes after it entered the water and then reached the surface of the water 12 minutes after it entered the water. Based on the function, what was the estimated depth, to the nearest meter, of the seal 10 minutes after it entered the water?", images: [], type: "grid", choices: null, answer: "168", domain: "Advanced Math", difficulty: "Hard" },
{ num: 432, stem: "An object is kicked from a platform. The equation h = -4.9t^2 + 7t + 9 represents this situation, where h is the height of the object above the ground, in meters, t seconds after it is kicked. Which number represents the height, in meters, from which the object was kicked?", images: [], type: "mc", choices: {"A": "0", "B": "4.9", "C": "7", "D": "9"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 433, stem: "y - 57 = px\n\nThe given equation relates the positive numbers p, x, and y. Which equation correctly expresses y in terms of p and x?", images: [], type: "mc", choices: {"A": "y = 57x + p", "B": "y = px + 57", "C": "y = 57px", "D": "y = px/57"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 434, stem: "(5x^3 - 3) - (-4x^3 + 8)\n\nThe given expression is equivalent to bx^3 - 11, where b is a constant. What is the value of b?", images: [], type: "grid", choices: null, answer: "9", domain: "Advanced Math", difficulty: "Medium" },
{ num: 435, stem: "Which expression is equivalent to 9x + 6x + 2y + 3y?", images: [], type: "mc", choices: {"A": "3x + 5y", "B": "6x + 8y", "C": "12x + 8y", "D": "15x + 5y"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 436, stem: "h(x) = -16x^2 + 100x + 10\n\nThe quadratic function above models the height above the ground h, in feet, of a projectile x seconds after it had been launched vertically. If y = h(x) is graphed in the xy-plane, which of the following represents the real-life meaning of the positive x-intercept of the graph?", images: [], type: "mc", choices: {"A": "The initial height of the projectile", "B": "The maximum height of the projectile", "C": "The time at which the projectile reaches its maximum height", "D": "The time at which the projectile hits the ground"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 437, stem: "The graph of a system of an absolute value function and a linear function is shown. What is the solution (x, y) to this system of two equations?\n\n[Figure: Coordinate grid, x-axis -8 to 3, y-axis 0 to 9. V-shaped absolute value function vertex at (-3,4); left branch rises through (-8,9); right branch rises toward (2,9). Straight line has y-intercept (0,8) and crosses the V graph at a marked intersection point near (-3.5,4.5).]", images: [], type: "mc", choices: {"A": "(0, 8)", "B": "(7/2, 9/2)", "C": "(-7/2, 9/2)", "D": "(-3, 4)"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 438, stem: "At the time that an article was first featured on the home page of a news website, there were 40 comments on the article. An exponential model estimates that at the end of each hour after the article was first featured on the home page, the number of comments on the article had increased by 190% of the number of comments on the article at the end of the previous hour. Which of the following equations best represents this model, where C is the estimated number of comments on the article t hours after the article was first featured on the home page and t <= 4?", images: [], type: "mc", choices: {"A": "C = 40(1.19)^t", "B": "C = 40(1.9)^t", "C": "C = 40(19)^t", "D": "C = 40(2.9)^t"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 439, stem: "Which expression is equivalent to 64t^2s^3 - 56t^3s?", images: [], type: "mc", choices: {"A": "4ts(16s^2 - 14ts)", "B": "4ts(16t^2s^2 - 14t)", "C": "4t^2s(16ts - 14s)", "D": "4t^2s(16s^2 - 14t)"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 440, stem: "Which of the following expressions is equivalent to 2(ab - 3) + 2?", images: [], type: "mc", choices: {"A": "2ab - 1", "B": "2ab - 4", "C": "2ab - 5", "D": "2ab - 8"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 441, stem: "The graph of the rational function f is shown, where y = f(x) and x >= 0. Which of the following is the graph of y = f(x) + 5, where x >= 0?\n\n[Figure: Question graph: x-axis 0-10, y-axis -4 to 12. Decreasing rational curve (x>=0) starts high near y-axis (~12), drops steeply, passes through (3,3), flattens approaching y=0 as x approaches 10. Four answer-choice graphs (A-D) show similarly-shaped curves at different vertical positions; correct D passes through (3,8), matching (3,3) shifted up 5.]", images: [], type: "mc", choices: {"A": "Decreasing rational curve passing through (2,0), continuing down to about (10,-4) - original graph shifted DOWN 5.", "B": "Flatter decreasing curve starting near (0.3,11), dropping quickly to near y=0 by x=3, staying just above 0 out to x=10 - original graph compressed/divided by 5.", "C": "Decreasing curve similar to original, starting near (0.5,12) decreasing to about (10,1.5) - not a valid vertical shift.", "D": "Decreasing curve starting near top around x=0.5-1, passing through about (3,8), leveling near (10,6) - original graph shifted UP 5 (correct)."}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 442, stem: "If 42/x = 7x, what is the value of 7x^2?", images: [], type: "mc", choices: {"A": "6", "B": "7", "C": "42", "D": "294"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 443, stem: "p(t) = 90,000(1.06)^t\n\nThe given function p models the population of Lowell t years after a census. Which of the following functions best models the population of Lowell m months after the census?", images: [], type: "mc", choices: {"A": "r(m) = (90,000/12)(1.06)^m", "B": "r(m) = 90,000(1.06/12)^m", "C": "r(m) = 90,000(1.06/12)^(m/12)", "D": "r(m) = 90,000(1.06)^(m/12)"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 444, stem: "The graph of the polynomial function f, where y = f(x), is shown. The y-intercept of the graph is (0, y). What is the value of y?\n\n[Figure: Graph, x-axis -1 to 1, y-axis -1 to 12. U-shaped (even-degree, quartic-like) curve symmetric about the y-axis, minimum/flat bottom at (0,4), rises steeply on both sides toward y=12 near x=-1 and x=1.]", images: [], type: "grid", choices: null, answer: "4", domain: "Advanced Math", difficulty: "Easy" },
{ num: 445, stem: "b - 72 = x/y\n\nThe given equation relates the positive numbers b, x, and y. Which equation correctly expresses x in terms of b and y?", images: [], type: "mc", choices: {"A": "x = (b - 72)/y", "B": "x = by - 72", "C": "x = (by - 72)/y", "D": "x = by - 72y"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 446, stem: "If k - x is a factor of the expression -x^2 + (1/29)nk^2, where n and k are constants and k > 0, what is the value of n?", images: [], type: "mc", choices: {"A": "-29", "B": "-1/29", "C": "1/29", "D": "29"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 447, stem: "The population of a town is currently 50,000, and the population is estimated to increase each year by 3% from the previous year. Which of the following equations can be used to estimate the number of years, t, it will take for the population of the town to reach 60,000?", images: [], type: "mc", choices: {"A": "50,000 = 60,000(0.03)^t", "B": "50,000 = 60,000(3)^t", "C": "60,000 = 50,000(0.03)^t", "D": "60,000 = 50,000(1.03)^t"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 448, stem: "For the exponential function f, the value of f(1) is k, where k is a constant. Which of the following equivalent forms of the function f shows the value of k as the coefficient or the base?", images: [], type: "mc", choices: {"A": "f(x) = 50(2)^(x+1)", "B": "f(x) = 80(2)^x", "C": "f(x) = 128(2)^(x-1)", "D": "f(x) = 205(2)^(x-2)"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 449, stem: "Which expression is equivalent to 17(x^2 - 100y^2)?", images: [], type: "mc", choices: {"A": "17(x - 2y)(x - 50y)", "B": "17(x - 2y)(x + 50y)", "C": "17(x - 10y)(x - 10y)", "D": "17(x - 10y)(x + 10y)"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 450, stem: "38x^2 = 38(9)\n\nWhat is the negative solution to the given equation?", images: [], type: "grid", choices: null, answer: "-3", domain: "Advanced Math", difficulty: "Medium" },
{ num: 451, stem: "m(t) = -0.0274(t/7)^2 + 7.3873(t/7) + 75.032\n\nThe function m gives the predicted body mass m(t), in kilograms (kg), of a certain animal t days after it was born in a wildlife reserve, where t <= 390. Which of the following is the best interpretation of the statement \"m(330) is approximately equal to 362\" in this context?", images: [], type: "mc", choices: {"A": "The predicted body mass of the animal was approximately 330 kg 362 days after it was born.", "B": "The predicted body mass of the animal was approximately 362 kg 330 days after it was born.", "C": "The predicted body mass of the animal was approximately 362 kg 330/7 days after it was born.", "D": "The predicted body mass of the animal was approximately 330/7 kg 362 days after it was born."}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 452, stem: "y = 2(x-d)(x+d)(x+g)(x-d)\n\nIn the given equation, d and g are unique positive constants. When the equation is graphed in the xy-plane, how many distinct x-intercepts does the graph have?", images: [], type: "mc", choices: {"A": "4", "B": "3", "C": "2", "D": "1"}, answer: "B", domain: "Advanced Math", difficulty: "Hard" },
{ num: 453, stem: "The functions g and h are defined by the given equations, where x >= 0. Which of the following equations displays, as a constant or coefficient, the minimum value of the function it defines, where x >= 0?\n\nI. g(x) = 18(1.16)(1.4)^(x+2)\nII. h(x) = 18(1.4)^(x+4)", images: [], type: "mc", choices: {"A": "I only", "B": "II only", "C": "I and II", "D": "Neither I nor II"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 454, stem: "The area A, in square centimeters, of a rectangular cutting board can be represented by the expression w(w+9), where w is the width, in centimeters, of the cutting board. Which expression represents the length, in centimeters, of the cutting board?", images: [], type: "mc", choices: {"A": "w(w+9)", "B": "w", "C": "9", "D": "(w+9)"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 455, stem: "Which expression is equivalent to 16(x+15)?", images: [], type: "mc", choices: {"A": "16x+31", "B": "16x+240", "C": "16x+1", "D": "16x+15"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 456, stem: "For the function q, the value of q(x) decreases by 45% for every increase in the value of x by 1. If q(0) = 14, which equation defines q?", images: [], type: "mc", choices: {"A": "q(x) = 0.55(14)^x", "B": "q(x) = 1.45(14)^x", "C": "q(x) = 14(0.55)^x", "D": "q(x) = 14(1.45)^x"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 457, stem: "In the xy-plane, the graph of the equation y = -x^2 + 9x - 100 intersects the line y = c at exactly one point. What is the value of c?", images: [], type: "mc", choices: {"A": "-481/4", "B": "-100", "C": "-319/4", "D": "-9/2"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 458, stem: "(x-11y)(2x-3y) - 12y(-2x+3y)\n\nWhich of the following is equivalent to the expression above?", images: [], type: "mc", choices: {"A": "x-23y", "B": "2x^2-xy-3y^2", "C": "2x^2+24xy+36y^2", "D": "2x^2-49xy+69y^2"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 459, stem: "b = 42cf\n\nThe given equation relates the positive numbers b, c, and f. Which equation correctly expresses c in terms of b and f?", images: [], type: "mc", choices: {"A": "c = b/(42f)", "B": "c = (b-42)/f", "C": "c = 42bf", "D": "c = 42-b-f"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 460, stem: "Two variables, x and y, are related such that for each increase of 1 in the value of x, the value of y increases by a factor of 4. When x = 0, y = 200. Which equation represents this relationship?", images: [], type: "mc", choices: {"A": "y = 4(x)^200", "B": "y = 4(200)^x", "C": "y = 200(x)^4", "D": "y = 200(4)^x"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 461, stem: "The graph of the quadratic function y = f(x) is shown. What is the vertex of the graph?\n\n[Figure: Coordinate plane, x-axis tick marks at -2 and 2, y-axis gridlines -1 to 12. Upward-opening parabola with vertex (minimum) at (0,2), narrow/steep, rising sharply on both sides, passing through approximately (-2,12) and (2,12).]", images: [], type: "mc", choices: {"A": "(0,-2)", "B": "(0,-3)", "C": "(0,2)", "D": "(0,3)"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 462, stem: "8x^2 - 40 = 32\n\nWhat is the positive solution to the given equation?", images: [], type: "mc", choices: {"A": "3", "B": "4", "C": "9", "D": "72"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 463, stem: "Which expression is equivalent to 12x^3 - 5x^3?", images: [], type: "mc", choices: {"A": "7x^6", "B": "17x^3", "C": "7x^3", "D": "17x^6"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 464, stem: "The function g is defined by g(x) = sqrt(x) + 300. What is the value of g(x) when x = 81?", images: [], type: "mc", choices: {"A": "9", "B": "300", "C": "309", "D": "381"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 465, stem: "f(x) = (a-19)/x + 5\n\nIn the given function f, a is a constant. The graph of function f in the xy-plane, where y = f(x), is translated 3 units down and 4 units to the right to produce the graph of y = g(x). Which equation defines function g?", images: [], type: "mc", choices: {"A": "g(x) = (a-19)/(x+4) + 2", "B": "g(x) = (a-19)/(x-4) + 2", "C": "g(x) = (a-22)/(x+4) + 5", "D": "g(x) = (a-22)/(x-4) + 5"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 466, stem: "c - 7 = 25p + k\n\nThe given equation relates the positive numbers c, p, and k. Which equation correctly expresses c in terms of p and k?", images: [], type: "mc", choices: {"A": "c = 25p+k+7", "B": "c = 25p+k-7", "C": "c = 7(25p+k)", "D": "c = (25p+k)/7"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 467, stem: "If (x+5)^2 = 4, which of the following is a possible value of x?", images: [], type: "mc", choices: {"A": "1", "B": "-1", "C": "-2", "D": "-3"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 468, stem: "f(x) = (1.84)^(x/4)\n\nThe function f is defined by the given equation. The equation can be rewritten as f(x) = (1 + p/100)^x, where p is a constant. Which of the following is closest to the value of p?", images: [], type: "mc", choices: {"A": "16", "B": "21", "C": "46", "D": "96"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 469, stem: "What is the minimum value of the function f defined by f(x) = (x-2)^2 - 4?", images: [], type: "mc", choices: {"A": "-4", "B": "-2", "C": "2", "D": "4"}, answer: "A", domain: "Advanced Math", difficulty: "Hard" },
{ num: 470, stem: "A function p estimates that there were 2,000 animals in a population in 1998. Each year from 1998 to 2010, the function estimates that the number of animals in this population increased by 3% of the number of animals in the population the previous year. Which equation defines this function, where p(x) is the estimated number of animals in the population x years after 1998?", images: [], type: "mc", choices: {"A": "p(x) = 2,000(3)^x", "B": "p(x) = 2,000(1.97)^x", "C": "p(x) = 2,000(1.03)^x", "D": "p(x) = 2,000(0.97)^x"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 471, stem: "y = ax^2 - c\n\nIn the equation above, a and c are positive constants. How many times does the graph of the equation above intersect the graph of the equation y = a + c in the xy-plane?", images: [], type: "mc", choices: {"A": "Zero", "B": "One", "C": "Two", "D": "More than two"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 472, stem: "Let the function p be defined as p(x) = ((x-c)^2 + 160) / (2c), where c is a constant. If p(c) = 10, what is the value of p(12)?", images: [], type: "mc", choices: {"A": "10.00", "B": "10.25", "C": "10.75", "D": "11.00"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 473, stem: "x = 8a(b + 9)\n\nThe given equation relates the positive numbers a, b, and x. Which equation correctly expresses a in terms of b and x?", images: [], type: "mc", choices: {"A": "a = x/8 - (b + 9)", "B": "a = x / (8(b+9))", "C": "a = 8(b+9) / x", "D": "a = 8x(b+9)"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 474, stem: "sqrt(x + 4) = 11\n\nWhat value of x satisfies the equation above?", images: [], type: "grid", choices: null, answer: "117", domain: "Advanced Math", difficulty: "Easy" },
{ num: 475, stem: "|-5x + 13| = 73\n\nWhat is the sum of the solutions to the given equation?", images: [], type: "mc", choices: {"A": "-146/5", "B": "-12", "C": "0", "D": "26/5"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 476, stem: "The function g is defined by g(x) = x(x - 2)(x + 6)^2. The value of g(7 - w) is 0, where w is a constant. What is the sum of all possible values of w?", images: [], type: "grid", choices: null, answer: "25", domain: "Advanced Math", difficulty: "Hard" },
{ num: 477, stem: "f(x) = (x + 0.25x)(50 - x)\n\nThe function f is defined above. What is the value of f(20)?", images: [], type: "mc", choices: {"A": "250", "B": "500", "C": "750", "D": "2,000"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 478, stem: "Which expression is equivalent to x^2 + 3x - 40?", images: [], type: "mc", choices: {"A": "(x - 4)(x + 10)", "B": "(x - 5)(x + 8)", "C": "(x - 8)(x + 5)", "D": "(x - 10)(x + 4)"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 479, stem: "There were no jackrabbits in Australia before 1788 when 24 jackrabbits were introduced. By 1920 the population of jackrabbits had reached 10 billion. If the population had grown exponentially, this would correspond to a 16.2% increase, on average, in the population each year. Which of the following functions best models the population p(t) of jackrabbits t years after 1788?", images: [], type: "mc", choices: {"A": "p(t) = 1.162(24)^t", "B": "p(t) = 24(2)^(1.162t)", "C": "p(t) = 24(1.162)^t", "D": "p(t) = (24 * 1.162)^t"}, answer: "C", domain: "Advanced Math", difficulty: "Medium" },
{ num: 480, stem: "Which of the following expressions is equivalent to the sum of (r^3 + 5r^2 + 7) and (r^2 + 8r + 12)?", images: [], type: "mc", choices: {"A": "r^5 + 13r^3 + 19", "B": "2r^3 + 13r^2 + 19", "C": "r^3 + 5r^2 + 7r + 12", "D": "r^3 + 6r^2 + 8r + 19"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 481, stem: "Which expression is equivalent to 12x + 27?", images: [], type: "mc", choices: {"A": "12(9x + 1)", "B": "27(12x + 1)", "C": "3(4x + 9)", "D": "3(9x + 24)"}, answer: "C", domain: "Advanced Math", difficulty: "Easy" },
{ num: 482, stem: "A right rectangular prism has a height of 9 inches. The length of the prism's base is x inches, which is 7 inches more than the width of the prism's base. Which function V gives the volume of the prism, in cubic inches, in terms of the length of the prism's base?", images: [], type: "mc", choices: {"A": "V(x) = x(x+9)(x+7)", "B": "V(x) = x(x+9)(x-7)", "C": "V(x) = 9x(x+7)", "D": "V(x) = 9x(x-7)"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 483, stem: "x^2 + y + 7 = 7\n20x + 100 - y = 0\n\nThe solution to the given system of equations is (x, y). What is the value of x?", images: [], type: "grid", choices: null, answer: "-10", domain: "Advanced Math", difficulty: "Hard" },
{ num: 484, stem: "y = 4x\ny = x^2 - 12\n\nA solution to the given system of equations is (x, y), where x > 0. What is the value of x?", images: [], type: "grid", choices: null, answer: "6", domain: "Advanced Math", difficulty: "Medium" },
{ num: 485, stem: "y = x^2 - 1\ny = 3\n\nWhen the equations above are graphed in the xy-plane, what are the coordinates (x, y) of the points of intersection of the two graphs?", images: [], type: "mc", choices: {"A": "(2, 3) and (-2, 3)", "B": "(2, 4) and (-2, 4)", "C": "(3, 8) and (-3, 8)", "D": "(sqrt(2), 3) and (-sqrt(2), 3)"}, answer: "A", domain: "Advanced Math", difficulty: "Medium" },
{ num: 486, stem: "The function f is defined by f(x) = 5x^2. What is the value of f(8)?", images: [], type: "mc", choices: {"A": "40", "B": "50", "C": "80", "D": "320"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 487, stem: "Which expression is equivalent to 34x + 34y?", images: [], type: "mc", choices: {"A": "34xy", "B": "34(x + y)", "C": "68y", "D": "68x"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 488, stem: "If |4x - 4| = 112, what is the positive value of x - 1?", images: [], type: "grid", choices: null, answer: "28", domain: "Advanced Math", difficulty: "Medium" },
{ num: 489, stem: "For the exponential function f, the table above shows several values of x and their corresponding values of f(x), where a is a constant greater than 1. If k is a constant and f(k) = a^29, what is the value of k?\n\n[Figure: Data table with columns x and f(x): x=1, f(x)=a; x=2, f(x)=a^5; x=3, f(x)=a^9.]", images: [], type: "grid", choices: null, answer: "8", domain: "Advanced Math", difficulty: "Hard" },
{ num: 490, stem: "Which expression is equivalent to 256w^2 - 676?", images: [], type: "mc", choices: {"A": "(16w - 26)(16w - 26)", "B": "(8w - 13)(8w + 13)", "C": "(8w - 13)(8w - 13)", "D": "(16w - 26)(16w + 26)"}, answer: "D", domain: "Advanced Math", difficulty: "Easy" },
{ num: 491, stem: "h(x) = x^2 - 3\n\nWhich table gives three values of x and their corresponding values of h(x) for the given function h?\n\n[Figure: Four small answer-choice tables, each listing x=1,2,3 with corresponding h(x) values as shown in the choices.]", images: [], type: "mc", choices: {"A": "x=1,2,3 -> h(x)=4,5,6", "B": "x=1,2,3 -> h(x)=-2,1,6", "C": "x=1,2,3 -> h(x)=-1,1,3", "D": "x=1,2,3 -> h(x)=-2,1,3"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 492, stem: "Bacteria are growing in a liquid growth medium. There were 300,000 cells per milliliter during an initial observation. The number of cells per milliliter doubles every 3 hours. How many cells per milliliter will there be 15 hours after the initial observation?", images: [], type: "mc", choices: {"A": "1,500,000", "B": "2,400,000", "C": "4,500,000", "D": "9,600,000"}, answer: "D", domain: "Advanced Math", difficulty: "Medium" },
{ num: 493, stem: "x + 5 = 14\ny = 4x^2 + 4\n\nAt what point (x, y) do the graphs of the equations in the given system intersect?", images: [], type: "mc", choices: {"A": "(9, 324)", "B": "(9, 328)", "C": "(14, 4)", "D": "(14, 788)"}, answer: "B", domain: "Advanced Math", difficulty: "Easy" },
{ num: 494, stem: "52(x^3 + 64)(x^4 - 81) = 0\n\nHow many distinct real solutions does the given equation have?", images: [], type: "mc", choices: {"A": "Exactly two", "B": "Exactly three", "C": "Exactly five", "D": "Exactly seven"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 495, stem: "5x + 15\n\nWhich of the following is equivalent to the given expression?", images: [], type: "mc", choices: {"A": "5(x + 3)", "B": "5(x + 10)", "C": "5(x + 15)", "D": "5(x + 20)"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 496, stem: "The rational function f is defined by an equation in the form f(x) = a/(x+b), where a and b are constants. The partial graph of y = f(x) is shown. If g(x) = f(x + 4), which equation could define function g?\n\n[Figure: xy-plane, x-axis -10 to -1, y-axis -10 to 1. A decreasing branch of a rational/hyperbola function starts near top-left around (-10,0.5), passes through approximately (-7,-2), (-5,-6), drops sharply near x=-4 (suggesting vertical asymptote around x=-4).]", images: [], type: "mc", choices: {"A": "g(x) = 6/x", "B": "g(x) = 6/(x+4)", "C": "g(x) = 6/(x+8)", "D": "g(x) = 6(x+4)/(x+4)"}, answer: "C", domain: "Advanced Math", difficulty: "Hard" },
{ num: 497, stem: "The function f is defined by f(x) = 16/x. What is the value of f(x) when x = 17?", images: [], type: "mc", choices: {"A": "16/17", "B": "17/16", "C": "16", "D": "17"}, answer: "A", domain: "Advanced Math", difficulty: "Easy" },
{ num: 498, stem: "The area of a triangle is equal to x^2 square centimeters. The length of the base of the triangle is 2x + 22 centimeters, and the height of the triangle is x - 10 centimeters. What is the value of x?", images: [], type: "grid", choices: null, answer: "110", domain: "Advanced Math", difficulty: "Hard" },
{ num: 499, stem: "f(x) = (x - 10)(x + 13)\n\nThe function f is defined by the given equation. For what value of x does f(x) reach its minimum?", images: [], type: "mc", choices: {"A": "-130", "B": "-13", "C": "-23/2", "D": "-3/2"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" },
{ num: 500, stem: "Which expression is equivalent to the seventh root of (x^9 * y^9), where x and y are positive?", images: [], type: "mc", choices: {"A": "(xy)^(7/9)", "B": "(xy)^(9/7)", "C": "(xy)^16", "D": "(xy)^63"}, answer: "B", domain: "Advanced Math", difficulty: "Medium" },
{ num: 501, stem: "12/n - 2/t = -2/w\n\nThe given equation relates the variables n, t, and w, where n > 0, t > 0, and w > t. Which expression is equivalent to n?", images: [], type: "mc", choices: {"A": "12tw", "B": "6(t - w)", "C": "(w-t)/(6tw)", "D": "6tw/(w-t)"}, answer: "D", domain: "Advanced Math", difficulty: "Hard" }
],
  "Problem-Solving and Data Analysis": [],
  "Geometry and Trigonometry": []
};
