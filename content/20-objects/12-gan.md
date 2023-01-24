---
label: 12
title: GAN
subtitle: 2015
layout: entry
order: 213
presentation: side-by-side
class: 
---

GAN[^1] (or Generative Adversarial Network) is a class of machine learning techniques that pits two neural networks against each other for training purposes.

The first network is known as the generator. It tries to make fake copies---of whatever the thing at hand may be, for example handwriting or synthetic photos---that are convincing enough to fool the second network, or the discriminator. The second network has a single job---to determine which items are real and which are fakes created by the generator. As the two networks go through each training pass (called an epoch), they learn and improve---the generator to make better fakes, and the discriminator to get sharper at detecting fakes. Sometimes a GAN system will go through thousands of training epochs. This basic idea has produced spectacular results across a large range of AI application areas.

The concept of a GAN architecture was first proposed by computer scientist Ian Goodfellow and his colleagues at the Université de Montréal in June 2014. It has become one of the most productive and influential architectures for machine learning, spawning what some researchers call the "GAN Zoo" of over 500 different published variations.

**GANs Illustrated**

This animation illustrates the training process of a system of GAN neural networks. In this simplified but accurate representation, there are four main steps in each training cycle, or epoch. A GAN network may require thousands of epochs to reach sufficient quality. The principal steps are:

-   **POPULATE:** real images are placed into an image set to be evaluated
-   **GENERATE:** the generator neural network produces fake images that are mixed at random with the real images
-   **DISCRIMINATE**: the discriminator network attempts to determine whether each image is real or fake
-   **VALIDATE:** the discriminator network is shown which of its judgments were correct and which were incorrect

After an epoch, the generator and discriminator networks are both adjusted based on the outcome of the just-completed training cycle. In each epoch, the generator's ability to produce high-quality fakes improves, as does the discriminator's accuracy. Together, they train each other to refine their abilities, often achieving highly realistic and believable results after numerous cycles.

**GAN Zoo**

Since their introduction in 2014, GAN networks have spawned a "GAN Zoo" of over 500 different published architectures and variations. Some of the most surprising applications of GAN networks have been in the creation and modification of art. This video presents a selection of GAN systems, along with the art that each network produces.

**Deep Dream** (2015): A neural network modifies an image repeatedly to achieve maximum response in selected layers of the generator network, often leading to hallucinogenic results. Deep Dream was introduced in 2015, and remains popular among a worldwide community of AI artists.

**Style Transfer (and Artbreeder)** (2016): An image modification technique in which the AI system takes the style from one image or artist and applies it to another image. Artists using this tool will often put images through many generations of style transformations, mixing and tuning different styles along the way.

**VQGAN+CLIP** (2021): Two networks work together to produce an image from a text prompt. An image producing GAN-trained network (the VQGAN) tries to match what a language processing network (CLIP) is looking for, and with each iteration gets closer to that match. Finding the right verbal description for an interesting image requires skill---the general approach is called "prompt engineering"[^2] because the human artist creates the work by providing and fine-tuning the verbal prompts.

{% backmatter %}

[^1]: A generative adversarial network (GAN) is a class of machine learning frameworks in which two neural networks train each other by competing in a zero-sum game, where one agent's gain is another agent's loss.

[^2]: Prompt engineering or prompt programming is an interesting way to interact with GPT-3 neural network systems. It basically involves creating clever text-based scripts that make GPT-3 perform the tasks you desire.

{% endbackmatter %}