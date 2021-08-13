import axios from 'axios';
import express, { Application, Request, Response } from 'express';
import * as cheerio from 'cheerio';

const app: Application = express();

const PORT: number = 8000;

app.get('/pla', async (req: Request, res: Response) => {
    try {
        const { data, status } = await axios.get('https://webscraper.io/test-sites/e-commerce/allinone')
        if (status !== 200)
            res.status(data.status).send({
                message: 'Invalid URL'
            })

        const html = await data;
        const $ = cheerio.load(html)

        const result = Array.from($('div[class="wrapper"] > div[class="container test-site"] > div[class="row"] > div[class="col-md-9"] > div[class="row"] > div[class="col-sm-4 col-lg-4 col-md-4"] > div[class="thumbnail"]')).map((element) => ({
            imageUrl: 'https://webscraper.io' + $(element).find('img').attr('src')?.trim(),
            title: $(element).find('div[class="caption"] > h4 > a').attr('title')?.trim(),
            price: $(element).find('div[class="caption"] > h4[class="pull-right price"]')?.text().trim(),
            description: $(element).find('div[class="caption"] > p[class="description"]').text().trim(),
            review_count: parseInt($(element).find('div[class="ratings"] > p[class="pull-right"]').text().trim().split(" ").slice(0, -1).join() || '0'),
            rating: parseInt($(element).find('div[class="ratings"] > p[data-rating]').attr('data-rating')?.trim() || '0')
        })) || []


        // return res.status(200).send({ message: 'Server OK!' })
        return res.status(200).send({
            result
        })

    } catch (err) {
        console.error(err.message)
    }

    // res.send('Express + TypeScript Server');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});