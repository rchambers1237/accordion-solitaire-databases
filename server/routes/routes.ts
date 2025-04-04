import express, { Request, Response } from 'express';
import Users from '../models/user';
import Leaders from '../models/leaders';

const router = express.Router();

// GET all games (example - you might want to restrict this)
router.get('/', async (req: Request, res: Response) => {
  console.log("req.query in routes get:", req.query);

  try {
    const user = await Users.find();
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Failed to fetch user' });
  }
});

// GET a specific game by ID
router.get('/:id', async (req: Request, res: Response) => {
  console.log("req in routes get with :id:", req);
  try {
    // const game = await Game.findById(req.params.id);
    // if (game) {
    //   res.json(game);
    // } else {
    //   res.status(404).json({ message: 'Game not found' });
    // }
  } catch (error) {
    console.error('Error fetching game:', error);
    res.status(500).json({ message: 'Failed to fetch game' });
  }
});

// POST a new game
router.post('/', async (req: Request, res: Response) => {
  try {
    // const newGame = new Game(req.body);
    // const savedGame = await newGame.save();
    // res.status(201).json(savedGame);
  } catch (error) {
    console.error('Error creating game:', error);
    res.status(400).json({ message: 'Failed to create game', error });
  }
});

// PUT (update) an existing game by ID
router.put('/:id', async (req: Request, res: Response) => {
  try {
    // const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // if (updatedGame) {
    //   res.json(updatedGame);
    // } else {
    //   res.status(404).json({ message: 'Game not found' });
    // }
  } catch (error) {
    console.error('Error updating game:', error);
    res.status(400).json({ message: 'Failed to update game', error });
  }
});

// DELETE a game by ID
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    // const deletedGame = await Game.findByIdAndDelete(req.params.id);
    // if (deletedGame) {
    //   res.json({ message: 'Game deleted successfully' });
    // } else {
    //   res.status(404).json({ message: 'Game not found' });
    // }
  } catch (error) {
    console.error('Error deleting game:', error);
    res.status(500).json({ message: 'Failed to delete game' });
  }
});

export default router;
