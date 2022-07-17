class GenerateMap {
  width: number | null = null
  height: number | null = null
  imageMaps: number[][] = []

  init(width: number, height: number) {
    this.width = width
    this.height = height
  }

  generate(c: number, r: number) {
    if (!this.width || !this.height) return

    const cout = this.width / c
    const rout = this.height / r

    for (let i = 0; i < cout; i++) {
      const coords = [i * cout, 0, (i + 1) * cout, this.height]
      this.imageMaps.push(coords)
    }

    for (let i = 0; i < rout; i++) {
      const coords = [0, i * rout, this.width, (i + 1) * rout]
      this.imageMaps.push(coords)
    }

    return this.imageMaps
  }
}

declare namespace GenerateMap {}

export function useGenerateMap() {
  return new GenerateMap()
}
