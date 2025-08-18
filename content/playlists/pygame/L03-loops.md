---
title: "Lesson 03 | Loops"
date: 2025-05-06T14:00:00+05:30
draft: false
image: "https://campus.epam.ua/static/plan/5018/selfstudy103400068.png" # Path relative to static/
subjects: ["Pygame"]
keywords: ["idle", "exploration", "strategy"]
game:
  partial: "stick_hero"   # corresponds to layouts/partials/games/snake.html
  ratio: "16:9"       # optional, defaults to 16:9
  allowfullscreen: true
---


<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# extract all questions and give solutions

Sure! Here are the extracted questions from all the images, along with their solutions:

***

## 1. Match the functions with the correct area under the curve and graph (Image 4)

### **Question:**

Match the functions in Column A with the corresponding (signed) area between its graph and the interval $[-1, 1]$ on the X-axis in column B and the images of their graphs and the highlighted region corresponding to the area computed in Column C.
Options (in terms of matching):

- i) → b) → 1), ii) → a) → 2), iii) → c) → 3)
- i) → b) → 3), ii) → c) → 1), iii) → a) → 2)
- i) → c) → 1), ii) → b) → 2), iii) → a) → 3)
- i) → b) → 1), ii) → c) → 3), iii) → a) → 2)

**Column A (Functions):**
i) $f(x) = x$
ii) $f(x) = |x|$
iii) $f(x) = x^2$

**Column B (Areas):**
a) $\frac{2}{3}$
b) 0
c) 1

**Column C (Graphs):** — 1) 2) 3) (See image for mapping)

### **Solution:**

- $f(x) = x$ is an odd function, so the area under the curve from $[-1, 1]$ is **0** (b), and matches graph **1**.
- $f(x) = |x|$ is symmetric and positive, area is the integral of $|x|$ over $[-1, 1]$, which is **1** (c), and matches graph **3**.
- $f(x) = x^2$ is always positive, and $\int_{-1}^1 x^2 dx = 2/3$ (a), matches graph **2**.

So,
**Correct Option:**
i) → b) → 1), ii) → c) → 3), iii) → a) → 2)
**(First option)**

***

## 2. Maximum volume and surface area of an inscribed cylinder (Image 3)

### **Question:**

A cylinder of radius $x$ and height $2h$ is to be inscribed in a sphere of radius $R$... Choose the correct set of options.

***

**Given:**

- Volume: $V = 2\pi x^2 h$
- Curved Surface Area: $S = 4\pi x h$
- Cylinder fits in sphere: $x^2 + h^2 = R^2$
***

**Options:**

1. The cylinder has *maximum volume* amongst all cylinders when $h = R$.
2. The cylinder has *maximum volume* amongst all cylinders when $h = \sqrt{3}R$.
3. The cylinder has *maximum volume* amongst all cylinders when $h = \frac{R}{\sqrt{3}}$.
4. The cylinder has *maximum surface area* of curved surface when $h = 2R$.
5. The cylinder has *maximum surface area* when $h = \frac{R}{\sqrt{2}}$.
6. The cylinder has *maximum surface area* when $h = \sqrt{2}$.

***

### **Solution:**

#### **Maximum Volume:**

Let us maximize $V = 2\pi x^2 h$ under constraint $x^2 + h^2 = R^2$:

Substitute $x^2 = R^2 - h^2$:
$V = 2\pi (R^2 - h^2) h = 2\pi h (R^2 - h^2)$

Let $V = 2\pi (R^2 h - h^3)$.
Set derivative to 0 for critical points:

$$
\frac{dV}{dh} = 2\pi (R^2 - 3h^2) = 0 \implies R^2 = 3h^2 \implies h = \frac{R}{\sqrt{3}}
$$

#### **Maximum Surface Area:**

$S = 4\pi x h$, substitute $x = \sqrt{R^2 - h^2}$

$$
S = 4\pi h \sqrt{R^2 - h^2}
$$

Let $u = h^2$, so $S^2 \sim h^2 (R^2 - h^2) = h^2 R^2 - h^4$
Take derivative, set to 0:

$$
\frac{d}{dh}(h^2(R^2 - h^2)) = 2hR^2 - 4h^3 = 2h(R^2 - 2h^2) = 0
\implies h = 0 \text{ or } h^2 = \frac{R^2}{2} \implies h = \frac{R}{\sqrt{2}}
$$

**Correct Options:**

- The cylinder has maximum volume amongst all cylinders when $h = \frac{R}{\sqrt{3}}$.
- The cylinder has maximum surface area of curved surface when $h = \frac{R}{\sqrt{2}}$.

***

## 3. Negative area enclosed by a curve (Image 1)

### **Question:**

Which of the curves enclose a negative area on the $X$ axis in interval \$\$?[^1]

***

### **Solution (By visual inspection):**

- **Curve 1:** Always above x-axis ⇒ Positive area.
- **Curve 2:** Mostly below x-axis ⇒ Negative area.
- **Curve 3:** Always above x-axis ⇒ Positive area.
- **Curve 4:** Entire shaded region is below x-axis ⇒ Negative area.

**Correct Curves:**
Curve 2 and Curve 4.

***

## 4. Profits, Errors, and minimum values (Image 2)

#### Given:

- $f_1(x) = x^3$, $f_2(x) = x$
- Predicted: $g_1(x) = \sqrt{x}$, $g_2(x) = e^x$
- Error in prediction = area bounded by the curves in \$\$.[^1]

***

### **Q4:**

What will the absolute difference between the minimum values of $f_2$ and $g_2$ in the interval \$\$ be?[^1]

#### **Solution:**

- $f_2(x) = x$, minimum in \$\$ is at $x = 0$, so minimum is $0$[^1]
- $g_2(x) = e^{x}$, minimum in \$\$ is at $x = 0$, so minimum is $e^0 = 1$[^1]

**Absolute difference:** $|0 - 1| = 1$

***

### **Q5:**

Choose the correct statements about prediction errors:

- The error in prediction for company A is $\frac{5}{12}$.
- The error in prediction for company A is $\frac{11}{12}$.
- The error for A is more than that for B.
- The error for B is more than that for A.
- Error cannot be compared using given data.


#### **Solution:**

- Company A: $f_1(x) = x^3$, $g_1(x) = \sqrt{x}$, shaded area in right graph in Figure M2W3G2.
- Company B: $f_2(x) = x$, $g_2(x) = e^x$, left graph in Figure M2W3G3.
- Error = area between the curves over \$\$.[^1]

Calculate error for Company A:

$$
E_A = \int_0^1 |\sqrt{x} - x^3| dx = \int_0^1 (\sqrt{x} - x^3) dx = \left[ \frac{2}{3} x^{3/2} - \frac{1}{4} x^4 \right]_0^1 = \frac{2}{3} - \frac{1}{4} = \frac{8-3}{12} = \frac{5}{12}
$$

So, error for company A is $\frac{5}{12}$.

Company B:

$$
E_B = \int_0^1 |e^{x} - x| dx = \int_0^1 (e^{x} - x) dx = [e^x - \frac{1}{2} x^2]_0^1 = (e - \frac{1}{2}) - (1-0) = (e - \frac{1}{2} - 1) = (e - 1 - 0.5)
$$

But the option "The error in prediction for Company A is $\frac{11}{12}$" is not correct.

Between Company A and B, the area for B (since $e^x$ grows rapidly) will be larger, so the error for Company B is more than A.

**Correct Options:**

- The error in prediction for company A is $\frac{5}{12}$.
- The error in prediction for company B is more than that for company A.

***

## 5. Cubic function local minimum (Image 2)

### **Question:**

Let $f(x) = x^3 - 3x^2 + 37$. What is the local minimum value of $f$ attained at a critical point?

### **Solution:**

Set $f'(x) = 3x^2 - 6x = 3x(x-2) = 0$
So, critical points at $x = 0$ and $x = 2$.

- $f''(x) = 6x - 6$
    - At $x = 0$: $f''(0) = -6 < 0$ (local maximum)
    - At $x = 2$: $f''(2) = 12 - 6 = 6 > 0$ (local minimum)

Plug $x = 2$ into $f(x)$:

$$
f(2) = 8 - 12 + 37 = 33
$$

**Local minimum value is $\boxed{33}$**

***

## **Summary Table:**

| Q. No. | Solution |
| :-- | :-- |
| 1 | i) → b) → 1), ii) → c) → 3), iii) → a) → 2) |
| 2 | Max volume: $h = \frac{R}{\sqrt{3}}$; Max curved surface area: $h = \frac{R}{\sqrt{2}}$ |
| 3 | Curves 2 and 4 enclose negative area |
| 4 | Absolute difference = 1 |
| 5 | Error for A = $\frac{5}{12}$; Error for B > A |
| 6 | Local minimum value is 33 |

Let me know if you want any particular solution in more detail!

<div style="text-align: center">⁂</div>

[^1]: Screenshot-2025-08-08-095624.jpg

[^2]: Screenshot-2025-08-08-095641.jpg

[^3]: Screenshot-2025-08-08-095615.jpg

[^4]: Screenshot-2025-08-08-095558.jpg

