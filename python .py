from pynput.mouse import Button, Controller
import time

mouse = Controller()

# Set a delay before the auto-clicker starts
time.sleep(3)

# Define the number of clicks
num_clicks = 1000

for _ in range(num_clicks):
    mouse.click(Button.left)  # Clicks the left mouse button
    time.sleep(0.1)           # Small delay between clicks

print("Auto-clicking finished.")