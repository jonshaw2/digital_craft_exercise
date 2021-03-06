import pygame

KEY_UP = 273
KEY_DOWN = 274
KEY_LEFT = 276
KEY_RIGHT = 275

class Ball(object):
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.speed_x = 0
        self.speed_y = 0
        self.radius = 50

    def render(self, screen):
        pygame.draw.circle(screen, (255, 0, 0), (self.x, self.y), self.radius)

    def update(self):
        self.x += self.speed_x
        self.y += self.speed_y

def main():
    # declare the size of the canvas
    width = 500
    height = 500
    blue_color = (97, 159, 182)
    pygame.init()
    screen = pygame.display.set_mode((width, height))
    pygame.display.set_caption('Simple Example')

    # Game initialization
    ball = Ball(250, 250)

    stop_game = False
    while not stop_game:
        for event in pygame.event.get():
            # Event handling

            if event.type == pygame.KEYDOWN:


                if event.key == KEY_DOWN:
                    ball.speed_y += 1
                elif event.key == KEY_UP:
                    ball.speed_y += -1
                elif event.key == KEY_LEFT:
                    ball.speed_x += -1
                elif event.key == KEY_RIGHT:
                    ball.speed_x += 1
            #if event.type == pygame.KEYUP:


            #    if event.key == KEY_DOWN:
            #        ball.speed_y = 0
            #    elif event.key == KEY_UP:
            #        ball.speed_y = 0
            #    elif event.key == KEY_LEFT:
            #        ball.speed_x = 0
            #    elif event.key == KEY_RIGHT:
            #        ball.speed_x = 0
            if event.type == pygame.QUIT:
                stop_game = True


        # Game logic
        ball.update()
        # fill background color
        screen.fill(blue_color)

        # Game display
        ball.render(screen)
        font = pygame.font.Font(None, 25)
        text = font.render('Use arrow keys to move the ball', True, (0, 0, 0))
        screen.blit(text, (80, 230))

        pygame.display.update()

    pygame.quit()

if __name__ == '__main__':
    main()
