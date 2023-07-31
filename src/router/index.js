const {Router} = require("express");
const EventModel = require("../Schemas/event");
const e = require("express");

const router = Router();

router.get("/events", async (req, res) => {
  try {
    const events = await EventModel.find();

    events.forEach((event) => {
      const date = new Date();
      const eventDate = event.date;

      const diference = eventDate - date;
      const day = 86400000;

      if (diference < day) {
        event.notification = true;
        event.save();
      } else {
        event.notification = false;
        event.save();
      }
    });

    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

router.post("/create", async (req, res) => {
  try {
    const newEvent = new EventModel(req.body);
    await newEvent.save();
    res.status(200).json(newEvent);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
});

router.get("/events/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const event = await EventModel.findById(id);
    res.status(200).json(event);
  } catch (err) {
    res.status(404).json({error: err.message});
  }
});

router.put("/events/:id", async (req, res) => {
  const {id} = req.params;
  const {title, description, location, date, time} = req.body;

  try {
    const newData = {
      title,
      description,
      location,
      date,
      time,
    };

    const response = await EventModel.findByIdAndUpdate(id, newData);

    if (response) {
      res.status(200).json({message: "Evento actualizado correctamente."});
    } else {
      res.status(404).json({
        message: "No se encontró ningún evento con el ID proporcionado.",
      });
    }
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

router.delete("/events/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const response = await EventModel.findByIdAndDelete(id);

    if (response) {
      res.status(200).json({message: "Evento eliminado correctamente."});
    } else {
      res.status(404).json({
        message: "No se encontró ningún evento con el ID proporcionado.",
      });
    }
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

module.exports = router;
