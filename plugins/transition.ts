class Transition {
  obj: HTMLElement[] | null = null

  constructor(obj: string | HTMLElement[]) {
    if (typeof obj == "string")
      this.obj = Array.from(document.querySelectorAll(obj))
    else this.obj = obj
  }

  Lerp(position: number, speed: number) {
    if (!this.obj) return 0

    if (position >= this.obj.length) {
      return 0
    }

    var styleIn = { opacity: 1, transition: "opacity ease-in-out 0.5s" }
    //var styleOut = { opacity: 0.2, transition: 'opacity ease-in-out 0.5s',}
    //Array(...this.obj).map(x => x == this.obj[position] ? Object.assign(x.style, styleIn) : Object.assign(x.style, styleOut));
    Object.assign(this.obj[position].style, styleIn)

    position < this.obj.length ? position++ : 0

    setTimeout(() => this.Lerp(position, speed), speed)
  }

  onScroll(ob: string, speed: number = 0.5) {
    const elementsToShow = Array.from(
      document.querySelectorAll(ob)
    ) as HTMLElement[]

    if (!elementsToShow) return 0

    elementsToShow.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        var styles = {
          opacity: 1,
          transition: `opacity ease-in-out ${speed}`,
        }
        Object.assign(element.style, styles)
      } else {
        var styles = {
          opacity: 0.000001,
          transition: "opacity ease-in-out 1s",
        }
        Object.assign(element.style, styles)
      }
    })
  }
}

export function useTransition(obj: string | HTMLElement[]) {
  const transition = new Transition(obj)
  return transition
}
