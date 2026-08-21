# CH32 Devboard

Here's how to make a CH32 devboard! This tutorial is still a work-in-progress, but the schematic part is done :D

In this tutorial, we'll be using a CH32V203, which is catagorized for small-and-medium capacity general-purpose use on the [CH32V203 datasheet](https://www.lcsc.com/datasheet/C5142280.pdf?lcsc_vid=QFNXBlYEE1cLBgJVR1VdVV1XEgUNV1dSQVdbXgICElMxVlNeQFJcUVNRT1ZXVjtW). 

CH32 is a microcontroller! What's special about the CH32V203?

- it's cheap - the ones we're using are <1 USD each!
- it's got built in capacitive touch pins (search TKey on the datasheet to learn more)
- they're pretty small 

Some examples of projects made with a CH32V203, both by @cyao: 

- [Comu](https://github.com/cheyao/comu) - bite-sized CH32V203 board that fits inside your USB port
- [CH32 devboard](https://github.com/cyao1234/c32)

The specific one used in this tutorial is CH32V203G6U6, which you can find on LCSC [here](https://www.lcsc.com/product-detail/C5142280.html?s_z=n_q_CH32V203&lcsc_vid=QFNXBlYEE1cLBgJVR1VdVV1XEgUNV1dSQVdbXgICElMxVlNeQFJcUVNRT1ZXVjtW):

![](https://cdn.hackclub.com/01a02501-6e1a-73f8-9a09-5242e9832cb9/ch32-1.png)

## Schematic 

Open up the Schematic Editor on KiCad.

![](https://cdn.hackclub.com/01a0251a-0a4d-7357-b548-d808ab87581c/ch32-2.png)

### Setting up the CH32V203

Press A to add parts, then search for the CH32V203! Get the one that says CH32V203GxUx, click OK, then place it anywhere on your page:

![](https://cdn.hackclub.com/01a0251b-a208-73c1-9b1c-339142736b0c/ch32-3.png)

The first thing we're going to do is set up this microcontroller. 

![](https://cdn.hackclub.com/01a0251e-f2cb-7059-a7b7-87e7b08f2250/ch32-4.png)

Let's add power! Press P, and search for +3v3, then press OK.

![](https://cdn.hackclub.com/01a02550-e142-71dc-bdf5-f0f471c5c017/ch32-5.png)

Place it right on top of the VDD and VDDA pins. Then, wire it by pressing W, or press the thin white line on the right!

It should look like this when you're done:

![](https://cdn.hackclub.com/01a02560-62df-79b0-bb50-dcd0375dfda7/ch32-6.png)

Press P again, and search for GND. Put it below VSS and connect them.

![](https://cdn.hackclub.com/01a0255d-0486-7d06-9525-a4c770a627d9/ch32-7.png)

This is how the chip is going to get voltage! We still need to add a power source, but we'll be doing that later.

The next thing we're adding are decoupling capacitors. These are used to stabilize power and to filter out noise going to the CH32. 

We need one decoupling capacitor per power pin, so add two capacitors! Press A and search for Capacitor.

![](https://cdn.hackclub.com/01a02565-288f-7096-b7dd-27b4ccb26e73/ch32-8.png)

Add two! It doesn't matter where you place it in your schematic - I like putting it near the power pins.

![](https://cdn.hackclub.com/01a02565-369b-7e1c-a5ca-576851d41da9/ch32-9.png)

Connect both of them to +3v3 and GND. Then, change the text that says C into 100nF - this is the specific value we want the capacitor to be. You can change it by double clicking into the text. This doesn't matter for now, but it will when we order our PCB!

![](https://cdn.hackclub.com/01a02566-8ed1-7114-baf2-5a561af26aec/ch32-10.png)

The next thing we're adding are Boot and Reset buttons! These are used when putting firmware on the devboard.

We need a button for each of them, so press A, and search for SW_Push, and put two on your schematic. I've place them near the boot and reset pins, since that's where they'll be wired to.

![](https://cdn.hackclub.com/01a02573-1abf-7855-9497-6e3359c93f91/ch32-11.png)

Press P and add another GND and +3v3. Wire the button next to RST to ground, and the other one to power!

For the Boot button, you also want to add a resistor that is connected to ground. This is called a "pull-down resistor" - this is so that the pin is not left floating (not connected to anything, which picks up noise) when it is not pressed! This keeps the signal always high (+3v3) or low (GND); when the button is pressed, since the current chooses the path of least resistance, it'll be high instead of low.

![](https://cdn.hackclub.com/01a0257e-5088-782d-b402-5784fb64ad30/ch32-12.png)

Make sure your schematic looks wired like mine. Moving onto adding other parts now!

### USB-C

Press A, type in USB_C_Receptacle_USB2.0_14P, and place it anywhere with empty space!

![](https://cdn.hackclub.com/01a02586-9166-7aca-b00a-d1cb08165a34/ch32-13.png)

Press P, and add VBUS. Connect that to the pin that says VBUS on the USB-C. This is where our circuit gets power!

Add another GND. Connect SHEILD and GND to it. SHIELD is the metal outer part around the USB-C connector.

Then, add two resistors. Label them 5.1k. Connect each to CC1 and CC2, then wire them to ground.

You can rotate parts by pressing R, and you can also drag the part text around so that your schematic looks cleaner.

![](https://cdn.hackclub.com/01a0258f-bb55-75de-ae42-faf95235129e/ch32-14.png)

We need to connect the data pins, D- and D+, to the CH32. To do this, we'll use labels! 

You can think of a label as a portal that connects the pin with any other pin with the same label - it's used to wire things that are further away, so that the schematic looks cleaner.

Click the label button on the right. Type D+, then press OK.

![](https://cdn.hackclub.com/01a0259b-955b-751e-9514-a4b7e5e7ceae/ch32-15.png)

Wire them to the D+ and D- pins! You can rotate them twice so the green line is fully under the label.

![](https://cdn.hackclub.com/01a025a1-5dc4-7a31-95b2-4a2deb8e3732/ch32-16.png)

Copy paste the D+ and D- labels, and wire them to the D+ and D- pins on the CH32! This will be how data goes from your computer to the CH32 when they're connected via a USB-C cable.

![](https://cdn.hackclub.com/01a025a8-7088-769d-bf85-51201de18c67/ch32-17.png)

We're done with the USB-C now! 

### Voltage regulator

The power pins on the CH32 are currently not connected to a power source, so it can't currently turn on - let's do that now. We want what's coming from VBUS from the USB-C to the VDD pins. However, CH32 takes in +3v3, and the power coming from the USB-C is +5v, since it'll be connected to a laptop.

In order to turn +5v into +3v3 to not fry the CH32, we need to use a voltage regulator - that'll covert +5v to +3v3! 

The specific voltage regulator we'll use is the XC6206P332MR, which you can find on LCSC [here](https://www.lcsc.com/product-detail/C51886221.html?s_z=n_q_C51886221&globalKeyword=C51886221):

![](https://cdn.hackclub.com/01a025b3-b56d-7701-8bff-d2f5af6caa6e/ch32-18.png)

It's output voltage is fixed at 3.3v, which is exactly what we need - read the datasheet [here](https://www.lcsc.com/datasheet/C51886221.pdf?lcsc_vid=QFNXBlYEE1cLBgJVR1VdVV1XEgUNV1dSQVdbXgICElMxVlNeQFJdX1xVRFZZXzsOAxUeFF5JWBYZEEoKFBINSQcJGk4%3D).

Press A, and add the part named XC6206PxxxMR, and place it anywhere on your schematic.

![](https://cdn.hackclub.com/01a025e1-9f3e-7e4d-8b5b-c02feb6c7ea2/ch32-19.png)

Wire the VI (voltage in) pin to VBUS, the VO (voltage out) pin to +3v3, and the GND pin to GND.

Then, add a decoupling capacitors on each side - change their text to be 1uF.

![](https://cdn.hackclub.com/01a025e5-419a-729b-bc65-9fa50deee0a4/ch32-20.png)

Now your schematic should look something like this:

![](https://cdn.hackclub.com/01a025ef-b0c1-7624-979a-597fbd5e4c89/ch32-21.png)

Yay! you're almost done the schematic. To make it a devboard, break out the unused pins on the CH32! You can also make it anything else by attaching the various pins to different buttons, displays, sensors, etc.

Footprint assigning and PCB part tutorial coming soon!






