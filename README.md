# Image Viewer

The purpose of this project is to provide an image viewer.  It will have the ability to move to previous and next images.

## UX

As a user, when I first run this project, I expect the button of `id=prev` to be disabled, because this is the first image.

As a user, I expect the caption to be centered.

As a user, I want to see the position of the image (e.g. 1) out of the number of images.

As a user, when I click on the button with `id=next`, I expect to move on to
the next image, unless this is the last image.  If I am at the last image, I
expect the button with `id=next` to be disabled.

As a user, when I click on the button with `id=prev`, I expect to move on
to the previous image, unless this is the first image.  If I am at the first
image, I expect the button with `id=prev` to be disabled.

As a user, if I am on the first image and I click the button with `id=next`, I
expect the button with `id=prev` to be enabled.

As a user, if I click on the button with `id=settings`, I expect the caption
color to change.

As a user, if I click on the button with `id=reset`, I expect to go to the
first image.

As a user, if I hover on to the image, I expect the border color to change.  I
also expect a screentip to be displayed.

As a user, if I hover on to `id=img-caption`, the background color will change.

As a user, if I hover on to `id=pos-info`, the background color will change.

As a user, if I hover on to any button, a screentip is displayed and the background color will change.

The IMAGES is an object array.  It has the properties of `caption` and `source`.

The [IMAGES](images) are supplied.

`caption` is a string.  It has a brief description of the image (e.g. Le Geode, Paris, France).

`source` is a string.  It is the file path of the image (e.g. `images/la-geode-paris.JPG`).

CAPTION_COLORS is a string array.  It has 7 colors `black, blue, purple, green, darkorange, red and brown`.

Cycle - `black, blue, purple, green, darkorange, red, brown, black, blue and so on`.

## Features

* Move to Previous Image
* Move to Next Image
* Reset (Go to First Image)
* Change Caption Color (e.g. Black to Blue)

## Technologies

This project uses the technologies of HTML5, CSS3, Bootstrap 5.0.0-beta3, JavaScript, jQuery 3.5.1, Font Awesome 5.15.2 and Google Fonts.

JavaScript is used to manipulate Object Arrays and String Arrays.

## Testing

Ensure all user stories have been met.

## Deployment

This project to be deployed on GitHub Pages at the main branch.