---
label: 07
title: Boids and Autonomous Agents
subtitle: 1987
layout: entry
order: 208
presentation: side-by-side
class: 
---

In 1987, Craig Reynolds, an AI and computer graphics researcher, introduced "boids,"[^1] a program that simulates complex flocking motions---the collective motion of self-propelled entities like birds---using simple rules that would allow each "boid" to act as an independent agent.

The complex flocking motion that resulted from these simple rules surprised both Reynolds and the computer graphics community. "Boids," and the creation of emergent complex motion through the application of relatively simple rules to large numbers of autonomous agents, became an influential concept that was adopted and extended by many researchers, software developers and special effects artists.

Are "boids" really artificial intelligence, or simply clever algorithmic[^2] constructions that produce the illusion of complex behaviour without any underlying understanding? It is a subject of some debate, yet the same question can be asked of any AI system. Recalling Alan Turing's "Imitation Game," it may be sufficient to say that animating with autonomous agents creates the illusion of life on a grand scale---one that has fooled even expert human observers.

The three rules (or steering behaviours) for "boids" were simple:

-   **separation:** steer to avoid crowding local flockmates

-   **alignment:** steer toward the average heading of local flockmates

-   **cohesion:** steer to move toward the average position (centre of mass) of local flockmates

"Boids" was first presented by Craig Reynolds in 1986 as a technical paper at SIGGRAPH, the prestigious annual computer graphics conference. In 1987, Reynolds premiered a short computer animated film, *Stanley & Stella*, which featured a flock of birds and a school of fish animated using the "boids"algorithm. In 1998, Reynolds was honored with an Academy of Motion Pictures Scientific and Technical Award in recognition of "his pioneering contributions to the development of three-dimensional computer animation for motion picture production."

**WETA**

WETA is the New Zealand-based studio responsible for the spectacular special effects for the *Lord of the Rings* films, among many others. The crowd scenes produced by WETA are among the most influential and sophisticated applications of Craig Reynolds' "boids" algorithm. In the WETA generated scenes shown here, thousands of orcs, humans, dragons and other creatures are visible at the same time, exhibiting varied and complex action that would be impossible for human animators to produce. These extraordinary scenes offer a sophisticated balance of fantastical scale and believable behaviour, satisfying both our imaginations and our rational minds.

**Autonomous Vehicles**

Autonomous vehicles are another example of a flock of independent agents. The underlying idea is the same, although the sophistication necessary to guide a vehicle is vastly greater than that required for "boids" or movie special effects. Computer vision, ultrasonic sensors, LiDAR (Light Detection and Ranging) and radar, GPS, and up-to-date detailed mapping all must be fast, accurate and reliable. If a "boid" or a special effects soldier collides, no one gets hurt. This is not the case with vehicles, where a single collision could prove lethal. Not surprisingly, there are spirited debates regarding the ethical and moral challenges posed by fully autonomous vehicles.

{% backmatter %}

[^1]: Boids is an artificial program, developed by Craig Reynolds in 1986, which simulates the flocking behaviour of bids.

[^2]: An algorithm is a set of instructions or a recipe for solving a problem or accomplishing a task.

{% endbackmatter %}
