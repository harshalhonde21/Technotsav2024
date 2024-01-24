import DashModel from "../Models/DashboardModel.js";

export const getAllDepartments = async (req, res) => {
  try {
    const departments = await DashModel.find();
    const thresholdScore = 80;

    departments.sort((a, b) => {
      const scoreA = parseInt(a.departmentScore, 10);
      const scoreB = parseInt(b.departmentScore, 10);

      if (scoreA >= thresholdScore && scoreB >= thresholdScore) {
        return scoreB - scoreA;
      }

      if (scoreA >= thresholdScore) {
        return -1;
      }

      if (scoreB >= thresholdScore) {
        return 1;
      }

      return scoreB - scoreA;
    });

    res.json(departments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get department by ID
export const getDepartmentById = async (req, res) => {
  try {
    const department = await DashModel.findById(req.params.id);
    res.json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new department
export const addDepartment = async (req, res) => {
  const newDepartment = new DashModel(req.body);
  try {
    const savedDepartment = await newDepartment.save();
    res.json(savedDepartment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a department by ID
export const updateDepartment = async (req, res) => {
  try {
    const updatedDepartment = await DashModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedDepartment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a department by ID

export const deleteDepartment = async (req, res) => {
  try {
    const deletedDepartment = await DashModel.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'Deleted successfully'});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
