import sys
from recipe_scrapers import scrape_me
import json


class Scraper:
    def __init__(self, url):
        result = scrape_me(url)

        self.title = result.title()
        self.total_time = result.total_time()
        self.yields = result.yields()
        self.ingredients = result.ingredients()
        self.instructions = result.instructions()
        self.image = result.image()
        # self.host = result.host()
        # self.links = result.links()
        # self.nutrients = result.nutrients()


url = sys.argv[1]
result = Scraper(url)
print(json.dumps(vars(result)))
# print(json.dumps(vars(result), sort_keys=True, indent=4))
