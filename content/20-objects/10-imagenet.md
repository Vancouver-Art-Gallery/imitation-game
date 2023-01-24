---
label: 10
title: ImageNet
subtitle: 2009
layout: entry 
order: 211
presentation: side-by-side
class: 
---

In a world that produces and uploads more than two billion images to social media every day, it may seem trivial that the ImageNet visual database holds just fourteen million images. Yet, this database has played a pivotal role in the development of global AI systems that identify, classify and create images. Computer vision---object detection, facial recognition,[^1] scene reconstruction, image classification, pattern detection, edge detection, video tracking, etc.---is the cornerstone of contemporary AI, and arguably the most controversial.

Each of the fourteen million images in the ImageNet database has been labelled with a noun selected from a predetermined list of categories, which identifies the principal object in the image (toilet tissue, chair, goldfish, etc.) This labelled image is then assigned to a category that links it, through a nested hierarchy of 22,000 subcategories, to one of nine top-level categories. For example, a chair is a category of seat, which is a category of furniture, which is a category of furnishing, which is, finally, a top-level category of artifact. This mind-numbing process of labelling was verified by a team of 50,000 pieceworkers, hired through Amazon's Mechanical Turk, who labelled an average of fifty images per minute.

ImageNet is an astounding feat, a critical component of global AI research, easily accessible for no cost, and supported by sustained, collaborative and responsible research. But it is also a recipe for disaster---fundamental questions of privacy (the images were scraped from the Internet without permissions); bias[^2] (assumptions within labelling and the classification system); and technical error have challenged its authoritative status. In recent years, the ImageNet research team, led by Fei-Fei Li at Stanford University, has actively addressed many of these concerns.

**Nicolas Malevé, 12 Hours of ImageNet**

In 2019, for an exhibition at The Photographers' Gallery in London, artist and programmer Nicolas Malevé wrote a computer script that cycled through ImageNet at a speed of ninety milliseconds per image, traversing the entire dataset[^3] in a period of two months. The resulting display paused at random points to enable the viewer to "see" some of the images and their labelling. Malevé's project raises questions about the relation of scale between the overwhelming quantities of images needed to train algorithms, and the human attention and labour required to curate, annotate and verify the photographs.

*12 Hours of ImageNet* offers an excerpt of the larger project, a fragment of a database that is itself a tiny fragment of the archive of images circulating in the world.

**ImageNet Roulette**

On September 12, 2019, Kate Crawford, a professor at NYU, and artist Trevor Paglen launched an online project called ImageNet Roulette.

Five days later, on September 17, 2019, the senior research team at ImageNet issued a research post announcing that they were removing more than half of the "person" images (600,040) from their ImageNet dataset.

Why?

{% backmatter %}

[^1]: A facial recognition system is a technology capable of matching a human face from a digital image or a video frame against a database of faces, typically employed to authenticate users through ID verification services, works by pinpointing and measuring facial features from a given image.

[^2]: A phenomenon that occurs when an AI algorithm produces results that are systematically prejudiced due to erroneous assumptions in the machine learning process.

[^3]: A dataset is a collection of data that can be used to train an algorithm with the goal of finding predictable patterns inside the whole dataset.

{% endbackmatter %}
