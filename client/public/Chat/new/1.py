from sketchpy import canvas
from PIL import Image

# Replace 'your_image_url' with the actual URL of your image
image_url = 'h.webp'

pen = canvas.sketch_from_url(image_url)

# Draw the sketch
sketch_image = pen.draw(lambda t: t)

# Convert the sketch to a PIL Image
pil_image = Image.fromarray(sketch_image)

# Save the image to a file
pil_image.save('sketch_image.jpg')
