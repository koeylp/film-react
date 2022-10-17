import React, { useContext } from 'react'
import { CardTitle, Chip, Container, Section, Tab, Tabs } from 'react-materialize'
import { ThemeContext } from './ThemeContext'

export default function News() {
    const { theme } = useContext(ThemeContext)
    return (
        <Section style={{ padding: '70px' }}>
            <Container style={{ color: theme.color, backgroundColor: theme.backgroundColor }}>
                <Tabs
                    className="tab-demo z-depth-1 tabs-fixed-width"
                    scope="tabs-23"
                >
                    <Tab
                        options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                        }}
                        title="Top 3 movies all time of the world"

                    >
                        <h3>1. 2001: A Space Odyssey (1968)</h3>
                        <img style={{ width: '100%', height: 'auto' }} src="https://media.timeout.com/images/105455969/1024/768/image.jpg" />
                        <Chip style={{ backgroundColor: '#5A7082' }}
                            close={false}
                            options={null}
                        >
                            Film
                        </Chip>
                        <Chip style={{ backgroundColor: '#5A7082' }}
                            close={false}
                            options={null}
                        >
                            Science fiction
                        </Chip>
                        <p>The greatest film ever made began with the meeting of two brilliant minds: Stanley Kubrick and sci-fi seer Arthur C Clarke. ‘I understand he’s a nut who lives in a tree in India somewhere,’ noted Kubrick when Clarke’s name came up – along with those of Isaac Asimov, Robert A Heinlein and Ray Bradbury – as a possible writer for his planned sci-fi epic. Clarke was actually living in Ceylon (not in India, or a tree), but the pair met, hit it off, and forged a story of technological progress and disaster (hello, HAL) that’s steeped in humanity, in all its brilliance, weakness, courage and mad ambition. An audience of stoners, wowed by its eye-candy Star Gate sequence and pioneering visuals, adopted it as a pet movie. Were it not for them, 2001 might have faded into obscurity, but it’s hard to imagine it would have stayed there. Kubrick’s frighteningly clinical vision of the future – AI and all – still feels prophetic, more than 50 years on.—Phil de Semlyen</p>
                        <br></br>
                        <h3>2. The Godfather (1972)</h3>
                        <img style={{ width: '100%', height: 'auto' }} src="https://media.timeout.com/images/105455970/1024/768/image.jpg" />
                        <Chip
                            style={{ backgroundColor: '#5A7082' }}
                            close={false}
                            options={null}
                        >
                            Film
                        </Chip>
                        <Chip
                            style={{ backgroundColor: '#5A7082' }}
                            close={false}
                            options={null}
                        >
                            Thrillers
                        </Chip>
                        <p>From the wise guys of Goodfellas to The Sopranos, all crime dynasties that came after The Godfather are descendants of the Corleones: Francis Ford Coppola’s magnum opus is the ultimate patriarch of the Mafia genre. A monumental opening line (“I believe in America”) sets the operatic Mario Puzo adaptation in motion, before Coppola’s epic morphs into a chilling dismantling of the American dream. The corruption-soaked story follows a powerful immigrant family grappling with the paradoxical values of reign and religion; those moral contradictions are crystallized in a legendary baptism sequence, superbly edited in parallel to the murdering of four rivaling dons. With countless iconic details—a horse’s severed head, Marlon Brando’s wheezy voice, Nino Rota’s catchy waltz—The Godfather’s authority lives on.—Tomris Laffly</p>
                        <br></br>
                        <h3>3. Citizen Kane (1941)</h3>
                        <img style={{ width: '100%', height: 'auto' }} src="https://media.timeout.com/images/105455971/1024/768/image.jpg" />
                        <Chip
                            style={{ backgroundColor: '#5A7082' }}
                            close={false}
                            options={null}
                        >
                            Film
                        </Chip>
                        <Chip
                            style={{ backgroundColor: '#5A7082' }}
                            close={false}
                            options={null}
                        >
                            Drama
                        </Chip>
                        <p>Back in the headlines thanks to David Fincher’s brilliantly acerbic making-of drama Mank, Citizen Kane always finds a way to renew itself for a new generation of film lovers. For newbies, the journey of its bulldozer of a protagonist – played with inexhaustible force by actor-director-wunderkind Orson Welles – from unloved child to thrusting entrepreneur to press baron to populist feels entirely au courant (in unconnected news, Donald Trump came out as a superfan). You can bathe in the film’s groundbreaking techniques, like Gregg Toland’s deep-focus photography, or the limitless self-confidence of its staging and its investigation of American capitalism. But it’s also just a damn good story that you definitely don’t need to be a hardened cineaste to enjoy.—Phil de Semlyen</p>

                    </Tab>
                    <Tab
                        active
                        options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                        }}
                        title="Top 3 movies in Korea"
                    >
                        <h3>1. The Wailing (2016)</h3>
                        <img style={{ width: '100%', height: 'auto' }} src="https://media.timeout.com/images/103625898/1024/768/image.jpg" />
                        <Chip
                            style={{ backgroundColor: '#5A7082' }}
                            close={false}
                            options={null}
                        >
                            Film
                        </Chip>
                        <Chip
                            style={{ backgroundColor: '#5A7082' }}
                            close={false}
                            options={null}
                        >
                            Horror
                        </Chip>
                        <p>A masterpiece of atmospheric horror, The Wailing is long, intense and ambitious, but it never feels like a slog. It also borrows elements from across the landscape of horror - from zombies to demons to creepy kids - but never turns into a messy patchwork. The story, centering on a police officer racing to save a village from a mysterious virus before it can claim his daughter, unfolds gradually enough that it all seems natural, allowing the sense of dread to envelop you like a fog.</p>
                        <br></br>
                        <h3>2. Parasite (2019)</h3>
                        <img style={{ width: '100%', height: 'auto' }} src="https://media.timeout.com/images/105524543/1024/768/image.jpg" />
                        <Chip
                            style={{ backgroundColor: '#5A7082' }}
                            close={false}
                            options={null}
                        >
                            Film
                        </Chip>
                        <Chip
                            style={{ backgroundColor: '#5A7082' }}
                            close={false}
                            options={null}
                        >
                            Drama
                        </Chip>
                        <p>A landmark in world cinema, Parasite is the highest-grossing Korean movie in several countries, the first non-English production to win a Best Picture Oscar and universally regarded as one of the best films of the 21st century. All those things are well and good, but Bong Joon-ho’s true achievement was bringing the film’s biting capitalist critique to a global audience. The message isn’t exactly subtle: a destitute family living in the slums of Seoul attaches itself to a wealthy one, to the point of clandestinely living in their house, until the social order inevitably corrects itself. But within that is a thrilling, funny, often disturbing piece of entertainment that left Hollywood’s oblivious elites with no choice but to stand up and cheer. Knowledgeable film fans already awaited every Joon-ho project with breathless anticipation. Now, the world waits with them. </p>
                        <br></br>
                        <h3>3. A Tale of Two Sisters (2003)</h3>
                        <img style={{ width: '100%', height: 'auto' }} src="https://media.timeout.com/images/105890889/1024/768/image.jpg" />
                        <Chip
                            style={{ backgroundColor: '#5A7082' }}
                            close={false}
                            options={null}
                        >
                            Film
                        </Chip>
                        <Chip
                            style={{ backgroundColor: '#5A7082' }}
                            close={false}
                            options={null}
                        >
                            Horror
                        </Chip>
                        <p>This atmospheric horror fable, adapted from a folk story and released on what was a watershed year for Korean cinema (Bong Joon-ho’s Memories of Murder and Park Chan-wook’s Oldboy were released just a few months either side of A Tale of Two Sisters), echoes The Shining in both its intricate setting (a gothic mansion full of looming corridors and William Morris wallpaper) and its chilling atmosphere. But it’s elevated even further by Kim Jee-woon’s expert direction and Lee Byung-woo’s Hitchcockian score; the end result is a masterwork of psychological horror from one of Korea’s finest filmmakers.</p>
                    </Tab>
                </Tabs>
            </Container>

        </Section >

    )
}
