class DigitalClock
{
    constructor(element)
    {
        this.element=element;
    }

    start()
    {
       const up= this.update();
        setInterval(this.update,500);
    }

    update()
    {

        console.log("hi");

        const now = new Date();
      const hour=now.getHours() % 12 || 12;
      const minute=now.getMinutes();
      const second=now.getSeconds();
      const isAm = now.getHours() <12;

      const parts = {"hour":hour, "minute":minute, "second":second};

        console.log(parts.hour+" "+ parts.minute+" "+parts.isAm);

        console.log(parts.toString());
        const minutesFormatted=parts.minute.toString().padStart(2,"0");
        const seconds=parts.second.toString().padStart(2,"0");
        const timeFormatted=`${parts.hour}:${minutesFormatted}:${seconds}`;
        const ampm=parts.isAm ? "AM" :"PM"


      this.element.querySelector(".clock-time").textContent=timeFormatted;

        this.element.querySelector('.clock-ampm').textContent=ampm;

    }
};

const clockElement=document.querySelector('.clock');
const clockObject= new DigitalClock(clockElement);

clockObject.start();
