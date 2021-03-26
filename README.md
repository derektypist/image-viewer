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

