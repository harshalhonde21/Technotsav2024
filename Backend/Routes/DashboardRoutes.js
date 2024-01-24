import express from 'express';
import * as dashboardController from '../Controller/Dashboard.js';

const router = express.Router();


router.get('/departments', dashboardController.getAllDepartments);
router.get('/departments/:id', dashboardController.getDepartmentById);
router.post('/aadDepartments', dashboardController.addDepartment);
router.put('/updateDepartments/:id', dashboardController.updateDepartment);
router.delete('/deleteDepartments/:id', dashboardController.deleteDepartment);

export default router;
