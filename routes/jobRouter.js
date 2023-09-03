import { Router } from 'express';
const router = Router();

import { getAllJobs , getSingleJob , createJob , editJob , deleteJob , showStats} from "../controllers/jobController.js";
import { validateJobInput , validateId } from '../middleware/validationMiddleware.js';
import { checkForTestUser } from '../middleware/authMiddleware.js';

router.route("/").get(getAllJobs).post(checkForTestUser,validateJobInput ,createJob);
router.route("/stats").get(showStats);
router.route("/:id").get(validateId ,getSingleJob).patch(checkForTestUser,validateJobInput,validateId ,editJob).delete(checkForTestUser,validateId ,deleteJob);

export default router;