import pygame

KEY_UP = 273
KEY_DOWN = 274
KEY_LEFT = 276
KEY_RIGHT = 275

def main():
    # declare the size of the canvas
    width = 500
    height = 500
    blue_color = (97, 159, 182)
    x_pos = 250
    y_pos = 250
    pygame.init()
    screen = pygame.display.set_mode((width, height))
    pygame.display.set_caption('Simple Example')
    clock = pygame.time.Clock()

    # Game initialization
    hero_image = pygame.image.load('../images/hero.png').convert_alpha()

    stop_game = False
    while not stop_game:
        for event in pygame.event.get():
            # Event handling
            if event.type == pygame.KEYDOWN:
                if event.key == KEY_DOWN:
                    y_pos += 5

                if event.key == KEY_UP:
                    y_pos -= 5

                if event.key == KEY_RIGHT:
                    x_pos += 5

                if event.key == KEY_LEFT:
                    x_pos -= 5

            if event.type == pygame.QUIT:
                stop_game = True

        # Game logic

        # Draw background
        screen.fill(blue_color)

        # Game display

        screen.blit(hero_image, (x_pos, y_pos))

        pygame.display.update()

        clock.tick(60)

    pygame.quit()

if __name__ == '__main__':
    main()
