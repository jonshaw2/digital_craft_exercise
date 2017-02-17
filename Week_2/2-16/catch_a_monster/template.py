import pygame
import random
import time, math

KEY_UP = 273
KEY_DOWN = 274
KEY_LEFT = 276
KEY_RIGHT = 275
class Character(object):

    def render(self, screen):
        if self.hidden == False:
            screen.blit((self.image),(self.x, self.y))


    def hide(self):
        self.hidden = True

class Goblin(Character):
    def __init__(self):
        self.width = 512
        self.time = time.time()-2
        self.height = 480
        self.speed = 1
        self.hidden = False
        self.x = 16
        self.y = 16
        self.image = pygame.image.load('goblin.png').convert_alpha()

    def move(self):
        if time.time() - self.time > 2:
            self.movement = random.randint(1,8)
            self.time = time.time()

        if self.movement == 1:
            self.x += self.speed
        if self.movement == 2:
            self.y += self.speed
        if self.movement == 3:
            self.x -= self.speed
        if self.movement == 4:
            self.y -= self.speed
        if self.movement == 5:
            self.y -= self.speed
            self.x -= self.speed
        if self.movement == 6:
            self.y -= self.speed
            self.x += self.speed
        if self.movement == 7:
            self.y += self.speed
            self.x += self.speed
        if self.movement == 8:
            self.y += self.speed
            self.x -= self.speed

        if self.x > self.width+16:
            self.x = -16
        if self.x < -16:
            self.x = self.width+16
        if self.y > self.height+16:
            self.y = -16
        if self.y < -16:
            self.y = self.height+16
class Hero(Character):
    def __init__(self):
        self.width = 512
        self.height = 480
        self.speed = 20
        self.hidden = False
        self.x = self.width/2 -16
        self.y = self.height/2 -16
        self.image = pygame.image.load('hero.png').convert_alpha()

    #def render(self, screen):
    #    screen.blit((self.hero_image),(self.x, self.y))

    def move(self, event):
        if event == KEY_DOWN:
            self.y += self.speed
        if event == KEY_UP:
            self.y -= self.speed
        if event == KEY_RIGHT:
            self.x += self.speed
        if event == KEY_LEFT:
            self.x -= self.speed

        if self.x > self.width-32:
            self.x = self.width-32
        if self.y > self.height-32:
            self.y = self.height-32
        if self.x < 0:
            self.x = 0
        if self.y < 0:
            self.y = 0


class Monster(Character):
    def __init__(self):

        self.hidden = False
        self.width = 512
        self.height = 480
        self.time = time.time() -2
        self.speed = 2
        self.movement = 0
        self.x = 100
        self.y = 100
        self.image = pygame.image.load('monster.png').convert_alpha()

    def move(self):
        if time.time() - self.time > 2:
            self.movement = random.randint(1,8)
            self.time = time.time()

        if self.movement == 1:
            self.x += self.speed
        if self.movement == 2:
            self.y += self.speed
        if self.movement == 3:
            self.x -= self.speed
        if self.movement == 4:
            self.y -= self.speed
        if self.movement == 5:
            self.y -= self.speed
            self.x -= self.speed
        if self.movement == 6:
            self.y -= self.speed
            self.x += self.speed
        if self.movement == 7:
            self.y += self.speed
            self.x += self.speed
        if self.movement == 8:
            self.y += self.speed
            self.x -= self.speed

        if self.x > self.width+16:
            self.x = -16
        if self.x < -16:
            self.x = self.width+16
        if self.y > self.height+16:
            self.y = -16
        if self.y < -16:
            self.y = self.height+16


#    def render(self, screen):
#        screen.blit((self.image),(self.x, self.y))

def check_collision(hero, target):
    if math.sqrt((hero.x - target.x)**2 + (hero.y-target.y)**2) <32:
        return True
    return False

def main():
    pygame.init()

    width = 512
    height = 480
    blue_color = (97, 159, 182)

    sound = pygame.mixer.Sound('win.wav')
    sound_goblin = pygame.mixer.Sound('lose.wav')
    screen = pygame.display.set_mode((width, height))
    monster = Monster()
    # monster2 = Monster()
    hero = Hero()
    goblin = Goblin()
    background = pygame.image.load('background.png').convert_alpha()
    hero_image = pygame.image.load('hero.png').convert_alpha() # 32X32
    monster_image = pygame.image.load('monster.png').convert_alpha()
    pygame.display.set_caption('My Game')
    clock = pygame.time.Clock()
    ticks = time.time()
    goblins = []
    # Game initialization
    starttime = time.time()

    stop_game = False

    # hero = hero()

    while not stop_game:

        monster.move()
        goblin.move()
        # monster2.move()

        for event in pygame.event.get():

            # Event handling
            if event.type == pygame.KEYDOWN:
                hero.move(event.key)

            if event.type == pygame.QUIT:
                stop_game = True
        # Game logic

        # Draw background
        screen.fill(blue_color)
        screen.blit(background, (0, 0))
        goblin.render(screen)
        monster.render(screen)
        # monster2.render(screen)
        hero.render(screen)
        # Game display

        pygame.display.update()
        if check_collision(hero,goblin):
            pass
        if check_collision(hero,monster):
            sound.play()
            monster.hide()

            font = pygame.font.Font(None, 50)
            text = font.render('Press ENTER to play again.', True, (255, 0, 0))
            screen.blit(text, (80, 230))
            pygame.display.update()
            onward = True
            while onward:
                for event in pygame.event.get():
                    if event.type == pygame.KEYDOWN:
                        print event.key
                        if event.key == 13:
                            onward = False
                            monster.__init__()
                            hero.__init__()
                            goblin.__init__()

        clock.tick(60)

    pygame.quit()

if __name__ == '__main__':
    main()
