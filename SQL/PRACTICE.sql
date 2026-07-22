CREATE DATABASE company;
USE company;

CREATE TABLE EMP (
    EMPNO INT PRIMARY KEY,
    ENAME VARCHAR(10),
    JOB VARCHAR(20),
    MGR INT,
    HIREDATE DATE,
    SAL DECIMAL(7,2),
    COMM DECIMAL(7,2),
    DEPTNO INT
);

INSERT INTO EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO) VALUES
(7369, 'SMITH', 'CLERK', 7902, '1980-12-17', 800, NULL, 20),
(7499, 'ALLEN', 'SALESMAN', 7698, '1981-02-20', 1600, 300, 30),
(7521, 'WARD', 'SALESMAN', 7698, '1981-02-22', 1250, 500, 30),
(7566, 'JONES', 'MANAGER', 7839, '1981-04-02', 2975, NULL, 20),
(7654, 'MARTIN', 'SALESMAN', 7698, '1981-09-28', 1250, 1400, 30),
(7698, 'BLAKE', 'MANAGER', 7839, '1981-05-01', 2850, NULL, 30),
(7782, 'CLARK', 'MANAGER', 7839, '1981-06-09', 2450, NULL, 10),
(7788, 'SCOTT', 'ANALYST', 7566, '1987-04-19', 3000, NULL, 20),
(7839, 'KING', 'PRESIDENT', NULL, '1981-11-17', 5000, NULL, 10),
(7844, 'TURNER', 'SALESMAN', 7698, '1981-09-08', 1500, 0, 30),
(7876, 'ADAMS', 'CLERK', 7788, '1987-05-23', 1100, NULL, 20),
(7900, 'JAMES', 'CLERK', 7698, '1981-12-03', 950, NULL, 30),
(7902, 'FORD', 'ANALYST', 7566, '1981-12-03', 3000, NULL, 20),
(7934, 'MILLER', 'CLERK', 7782, '1982-01-23', 1300, NULL, 10);


SELECT * FROM EMP;

SELECT * 
FROM EMP 
WHERE COMM IS NULL AND DEPTNO = 20;

SELECT * 
FROM EMP
WHERE JOB = 'SALESMAN' IN (20,30) AND SAL > 1500;

SELECT ENAME
FROM EMP
WHERE ENAME LIKE 'S%' OR '%R';

SELECT *
FROM EMP 
WHERE DEPTNO NOT IN (10 , 20) ;

SELECT ENAME
FROM EMP 
WHERE ENAME NOT LIKE 'R%';

SELECT *
FROM EMP
WHERE MGR IS NULL AND DEPTNO IN (10,30);

SELECT *
FROM EMP
WHERE JOB = 'MANAGER' AND DEPTNO = 30 AND SAL BETWEEN 2000 AND 4000;

SELECT *
FROM EMP
WHERE JOB = 'ANALYST' AND DEPTNO IN (20,30) AND SAL NOT BETWEEN 1250 AND 3000;

-- ------------------------------ AGGREGATE FUNCTIONS --------------------------------------

SELECT COUNT(*)
FROM EMP 
WHERE SAL < 2000 AND DEPTNO = 10;

SELECT SUM(SAL)
FROM EMP 
WHERE JOB = 'CLERK';

SELECT COUNT(*)
FROM EMP
WHERE ENAME LIKE 'A%';

SELECT COUNT(*)
FROM EMP
WHERE JOB IN ('CLERK' , 'MANAGER');

SELECT SUM(SAL)
FROM EMP
WHERE HIREDATE LIKE '%-02-%';

SELECT COUNT(*)
FROM EMP
WHERE MGR = 7839;

SELECT COUNT(*)
FROM EMP
WHERE COMM IS NOT NULL AND DEPTNO = 30;

SELECT COUNT(*)
FROM EMP 
WHERE ENAME LIKE '%A%';

SELECT COUNT(*) , SUM(SAL)
FROM EMP
WHERE ENAME LIKE '%LL%';

SELECT COUNT(DISTINCT DEPTNO)
FROM EMP;

SELECT COUNT(DISTINCT SAL)
FROM EMP;

SELECT COUNT(DISTINCT JOB)
FROM EMP;

SELECT MIN(SAL) 
FROM EMP
WHERE DEPTNO = 10 AND JOB IN ('MANAGER' , 'CLERK');


-- ---------------------------- GROUP BY -------------------------------------

SELECT COUNT(*), DEPTNO
FROM EMP
WHERE JOB != 'PRESIDENT'
GROUP BY DEPTNO;


SELECT SUM(SAL) AS 'TOTAL SAL', JOB
FROM EMP
GROUP BY JOB;


SELECT COUNT(*) AS MANAGER_COUNT ,DEPTNO
FROM EMP
WHERE JOB = 'MANAGER'
GROUP BY DEPTNO;


SELECT AVG(SAL), DEPTNO
FROM EMP
WHERE DEPTNO != 20
GROUP BY DEPTNO;



SELECT COUNT(*),JOB
FROM EMP
WHERE ENAME LIKE '%A%'
GROUP BY JOB;


SELECT DEPTNO, COUNT(*), AVG(SAL)
FROM EMP
WHERE SAL > 2000
GROUP BY DEPTNO;

SELECT DEPTNO , SUM(SAL), COUNT(*)
FROM EMP
WHERE JOB = 'SALESMAN'
GROUP BY DEPTNO;


SELECT DEPTNO, MAX(SAL)
FROM EMP
GROUP BY DEPTNO;


SELECT SAL, COUNT(*)
FROM EMP 
GROUP BY SAL;


-- -------------------------------------- GROUP BY & HAVING -----------------------------------------------


SELECT DEPTNO , SUM(SAL)
FROM EMP
GROUP BY DEPTNO
HAVING COUNT(*) > 3;


SELECT JOB , COUNT(*)
FROM EMP
WHERE SAL > 1200
GROUP BY JOB
HAVING SUM(SAL) > 3800;


SELECT DEPTNO, COUNT(*) 
FROM EMP 
WHERE JOB = 'MANAGER'
GROUP BY DEPTNO
HAVING COUNT(*) = 2;


SELECT JOB , MAX(SAL)
FROM EMP 
GROUP BY JOB
HAVING MAX(SAL) > 2600;

-- ----------------------------- CHALLENGE QUESTIONS HAVING ALL TOPICS ---------------------------------

SELECT JOB , SUM(SAL) 
FROM EMP
GROUP BY JOB;


SELECT HIREDATE 
FROM EMP
GROUP BY HIREDATE
HAVING COUNT(*) > 2;


-- ----------------- SUB QUIERY --------------------------

SELECT ENAME, SAL
FROM EMP 
WHERE SAL > (SELECT SAL 
			FROM EMP
            WHERE ENAME = 'MILLER') AND
            
	 SAL < (SELECT SAL
            FROM EMP 
            WHERE ENAME = 'ALLEN');
            
            

SELECT * 
FROM EMP 
WHERE DEPTNO = 20 AND 
					JOB = (SELECT JOB
							FROM EMP 
							WHERE ENAME = 'SMITH');
                            

SELECT *
FROM EMP
WHERE JOB = 'MANAGER' AND 
						DEPTNO = (SELECT DEPTNO
								  FROM EMP
                                  WHERE ENAME = 'TURNER');

SELECT ENAME, HIREDATE
FROM EMP
WHERE HIREDATE > '1980-12-31'  AND  
	  HIREDATE < (SELECT HIREDATE
				  FROM EMP
                  WHERE ENAME = 'KING');
                  
                  

SELECT ENAME, SAL , SAL*12 AS ANUAL_SAL
FROM EMP 
WHERE SAL < ( SELECT SAL
			  FROM EMP
              WHERE ENAME = 'BLAKE') AND SAL < 3500;
              
              
SELECT * 
FROM EMP 
WHERE SAL IN (SELECT SAL
FROM EMP
GROUP BY SAL
HAVING COUNT(*) > 1);


-- -------------------------- SUBQUIRY - CASE (1 AND 2) ----------------------------------

SELECT ENAME
FROM EMP
WHERE SAL > ( SELECT SAL 
		FROM EMP
        WHERE ENAME = 'SCOTT') AND
DEPTNO IN (SELECT DEPTNO
		   FROM DEPT
           WHERE DNAME = 'ACCOUNTING');
           
           
SELECT * 
FROM EMP
WHERE JOB = 'MANAGER' AND 
	DEPTNO IN (SELECT DEPTNO
				FROM DEPT
                WHERE LOC = 'CHICAGO');
                
                
SELECT ENAME, SAL
FROM EMP 
WHERE SAL > (SELECT SAL
			 FROM EMP
             WHERE ENAME = 'KING') AND
 DEPTNO IN (SELECT DEPTNO
			FROM DEPT
            WHERE DNAME = 'ACCOUNTING');


SELECT * 
FROM EMP;
-- ---------------------------------------------- DEPT TABLE ------------------
CREATE TABLE DEPT (
    DEPTNO INT PRIMARY KEY,
    DNAME VARCHAR(20) NOT NULL,
    LOC VARCHAR(20) NOT NULL
);
            
INSERT INTO DEPT (DEPTNO, DNAME, LOC) VALUES
(10, 'ACCOUNTING', 'NEW YORK'),
(20, 'RESEARCH', 'DALLAS'),
(30, 'SALES', 'CHICAGO'),
(40, 'OPERATIONS', 'BOSTON');

SELECT * 
FROM DEPT;


-- --------- - -- 

SELECT ENAME 
FROM EMP 
WHERE SAL = (SELECT MAX(SAL)
			FROM EMP);
            
SELECT ENAME 
FROM EMP 
WHERE SAL = (SELECT MIN(SAL)
			FROM EMP);
            
SELECT ENAME, HIREDATE
FROM EMP
WHERE HIREDATE IN (SELECT MIN(HIREDATE)
					FROM EMP);
                    
SELECT ENAME, HIREDATE
FROM EMP
WHERE HIREDATE IN (SELECT MAX(HIREDATE)
					FROM EMP);
                    
SELECT ENAME,COMM
FROM EMP
WHERE COMM IN (SELECT MIN(COMM)
				FROM EMP);
            

SELECT ENAME,COMM
FROM EMP
WHERE COMM IN (SELECT MAX(COMM)
				FROM EMP);
            

-- ------------------------------------- HOME PRACTICE ------------------------------------
SELECT *
FROM EMP;

SELECT *
FROM DEPT;


-- SQL Practice Questions (EMP & DEPT Tables)

/*
SELECT

1. Display all employee details.
2. Display employee names and salaries.
3. Display employee names, jobs, and department numbers.
4. Display employee names along with their annual salary.
5. Display all department details.

⸻

WHERE Clause

6. Display employees working in department 30.
7. Display employees earning more than 2000.
8. Display employees whose job is CLERK.
9. Display employees hired after 1-Jan-1982.
10. Display employees whose manager is 7698.
11. Display employees working in department 20 and earning more than 1000.
12. Display employees whose salary is less than 1500.

⸻

DISTINCT

13. Display all unique job titles.
14. Display all unique department numbers.
15. Display all unique manager IDs.

⸻

Aggregate Functions

16. Find the total number of employees.
17. Find the maximum salary.
18. Find the minimum salary.
19. Find the average salary.
20. Find the total salary paid to all employees.

⸻

GROUP BY

21. Display the total salary department-wise.
22. Display the average salary department-wise.
23. Display the number of employees in each department.
24. Display the maximum salary for each job.
25. Display the minimum salary for each department.
26. Display the average salary for each job.

⸻

HAVING

27. Display departments having more than 3 employees.
28. Display departments whose average salary is greater than 2000.
29. Display jobs whose total salary is greater than 5000.
30. Display departments having more than 2 employees.

⸻

Operators

Arithmetic Operators

31. Display employee names with annual salary.
32. Display employee names with salary increased by 500.

Comparison Operators

33. Display employees earning more than 1500.
34. Display employees earning less than 1500.
35. Display employees whose salary is equal to 3000.
36. Display employees whose job is not CLERK.

Logical Operators

37. Display employees working in department 30 and earning more than 1200.
38. Display employees who are MANAGER or ANALYST.
39. Display employees not working in department 20.

⸻

Special Operators

BETWEEN

40. Display employees earning between 1000 and 3000.

IN

41. Display employees working in departments 10 and 30.

NOT IN

42. Display employees not working in departments 10 and 20.

LIKE

43. Display employees whose names start with ‘S’.
44. Display employees whose names end with ‘N’.
45. Display employees whose names contain ‘A’.
46. Display employees whose second letter is ‘A’.
47. Display employees whose names have exactly five characters.

IS NULL

48. Display employees who do not receive commission.

IS NOT NULL

49. Display employees who receive commission.

⸻

Subqueries

50. Display employees earning more than the average salary.
51. Display employee(s) receiving the highest salary.
52. Display employees working in the SALES department.
53. Display employees working in NEW YORK.
54. Display employees earning more than JONES.
55. Display employees having the same job as ALLEN.
56. Display employees working in the ACCOUNTING department.
57. Find the second highest salary.
58. Display employees earning more than the average salary of their department.
59. Display departments having at least one employee earning more than 3000. */

-- -------------------------- ------------------------------------------

SELECT *
FROM EMP;

SELECT ENAME, SAL
FROM EMP;

SELECT ENAME, SAL, DEPTNO
FROM EMP;

SELECT ENAME, SAL*12 AS ANV_SAL
FROM EMP;

SELECT *
FROM DEPT;

SELECT *
FROM EMP
WHERE DEPTNO = 30;


SELECT ENAME , SAL 
FROM EMP 
WHERE SAL > 2000;

SELECT ENAME
FROM EMP
WHERE JOB = 'CLERK';

SELECT ENAME, HIREDATE
FROM EMP
WHERE HIREDATE > '1982-01-01';

SELECT ENAME, MGR
FROM EMP 
WHERE MGR = 7698;

SELECT ENAME, SAL, DEPTNO
FROM EMP
WHERE DEPTNO = 20 AND SAL > 1000;

SELECT ENAME, SAL
FROM EMP 
WHERE SAL < 1500;

SELECT DISTINCT JOB
FROM EMP;

SELECT DISTINCT DEPTNO
FROM EMP;

SELECT DISTINCT MGR
FROM EMP
WHERE MGR IS NOT NULL;

-- -------------- Aggregate Functions ------------
SELECT COUNT(*)
FROM EMP;

SELECT MAX(SAL)
FROM EMP;

SELECT MIN(SAL)
FROM EMP;

SELECT AVG(SAL)
FROM EMP;

SELECT SUM(SAL)
FROM EMP;

-- ----------------- GROUP BY -----------------

SELECT SAL, DEPTNO
FROM EMP
GROUP BY DEPTNO;

SELECT AVG(SAL),DEPTNO
FROM EMP
GROUP BY DEPTNO;

SELECT COUNT(*),DEPTNO
FROM EMP
GROUP BY DEPTNO;

SELECT MAX(SAL), JOB
FROM EMP
GROUP BY JOB;

SELECT MIN(SAL), JOB
FROM EMP
GROUP BY JOB;

SELECT AVG(SAL), JOB
FROM EMP
GROUP BY JOB;

-- -------- HAVING -----------
SELECT DEPTNO, COUNT(*)
FROM EMP
GROUP BY DEPTNO
HAVING COUNT(*) > 3;

SELECT DEPTNO, AVG(SAL)
FROM EMP
GROUP BY DEPTNO
HAVING AVG(SAL) > 2000;

SELECT JOB
FROM EMP
GROUP BY JOB
HAVING SUM(SAL) > 5000;

-- SELECT DISTINCT JOB
-- FROM EMP 
-- WHERE SAL > 1000;

SELECT DEPTNO, COUNT(*)
FROM EMP
GROUP BY DEPTNO
HAVING COUNT(*) > 2; 


-- -------------- Operators ---------

-- Arithmetic Operators
SELECT ENAME, SAL*12 AS ANUAL_SAL
FROM EMP;

SELECT ENAME , SAL+500 AS NEW_SAL
FROM EMP;

-- Comparison Operators
SELECT ENAME 
FROM EMP
WHERE SAL > 1500;

SELECT ENAME 
FROM EMP
WHERE SAL < 1500;

SELECT ENAME 
FROM EMP
WHERE SAL = 3000;

SELECT ENAME
FROM EMP
WHERE JOB != 'CLERK';

-- Logical Operators

SELECT ENAME
FROM EMP
WHERE DEPTNO = 30 AND SAL > 1200;

SELECT ENAME 
FROM EMP
WHERE JOB = 'MANAGER' OR 'ANALYST';
-- WHERE JOB IN ('MANAGER','ANALYST');

SELECT ENAME,DEPTNO
FROM EMP
WHERE DEPTNO != 20; 

-- Special Operators
-- BETWEEN

SELECT ENAME
FROM EMP
WHERE SAL BETWEEN 1000 AND 3000;

-- IN
SELECT ENAME
FROM EMP
WHERE DEPTNO IN (10,30);

-- NOT IN 
SELECT ENAME, DEPTNO
FROM EMP
WHERE DEPTNO NOT IN (10,20);

-- LIKE
SELECT ENAME 
FROM EMP
WHERE ENAME LIKE 'S%';

SELECT ENAME
FROM EMP
WHERE ENAME LIKE '%N';

SELECT ENAME
FROM EMP
WHERE ENAME LIKE '%N%';

SELECT ENAME
FROM EMP
WHERE ENAME LIKE '_A%';

SELECT ENAME
FROM EMP
WHERE ENAME LIKE '_____';

SELECT ENAME ,COMM
FROM EMP
WHERE COMM IS NULL;

SELECT ENAME ,COMM
FROM EMP
WHERE COMM > 0;

-- Subqueries

SELECT ENAME
FROM EMP
WHERE SAL > (SELECT AVG(SAL)
			 FROM EMP);
  
SELECT ENAME, SAL
FROM EMP
WHERE SAL = (SELECT MAX(SAL)
			 FROM EMP);
             

SELECT ENAME, DEPTNO 
FROM EMP
WHERE DEPTNO = (SELECT DEPTNO
				FROM DEPT
                WHERE DNAME = 'SALES');

SELECT ENAME, DEPTNO
FROM EMP
WHERE DEPTNO = (SELECT DEPTNO
				FROM DEPT
                WHERE LOC = 'NEW YORK');
                
SELECT ENAME
FROM EMP
WHERE SAL > (SELECT SAL 
			FROM EMP
            WHERE ENAME = 'JONES');

SELECT ENAME , JOB
FROM EMP
WHERE JOB = (SELECT JOB
			 FROM EMP
             WHERE ENAME = 'ALLEN');
             
SELECT ENAME
FROM EMP
WHERE DEPTNO = (SELECT DEPTNO
				FROM DEPT
                WHERE DNAME = 'ACCOUNTING');
                
SELECT MAX(SAL)
FROM EMP 
WHERE SAL < (SELECT MAX(SAL)
			 FROM EMP);
             
SELECT SAL
FROM EMP
ORDER BY SAL DESC
LIMIT 1 OFFSET 1;

SELECT SAL 
FROM EMP;

SELECT ENAME 
FROM EMP 
WHERE SAL > (SELECT AVG(SAL)
			FROM EMP);
            
SELECT DEPTNO
FROM EMP
WHERE SAL IN (SELECT SAL
			  FROM EMP
              WHERE SAL > 3000);
              



















