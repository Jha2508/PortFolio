import React from "react";

function article_2() {
    return {
        date: "7 June 2022",
        title: "ZS BTSA Interview Experience off campus round",
        description:
            "Campus Beats ZS Associates experience",
        keywords: [
            "ZS BTSA Interview Experiences",
            "Kshitiz",
            "Kshitiz J",
            "Kshitiz Jha"
        ],
        style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				`,
        body: (
            <React.Fragment>
                <div className="article-content">
                    <div className="paragraph">
                        ZS Associates organized Campus Beats in March 2022. The Campus Beats challenge had 2 types of
                        challenges:
                        <ul>
                            <li>

                                Tech Challenge
                            </li>
                            <li>
                                Case Challenge
                            </li>
                        </ul>
                        I appeared for the Tech Challenge in March 2022. The whole procedure was divided into 3 parts :
                        <ul>
                            <li>
                                Technical Test
                            </li>
                            <li>
                                Technical Interview
                            </li>
                            EBI + FIT Interview
                            <li>
                            </li>

                        </ul>
                        Technical Test(19-03-2022) Total time: 6 hours. Attempted by: 1 member of the team(can discuss
                        with the team). A technical test was a task given to the whole team. I had a team of 5 members.
                        This test was a bit simple. There were 7 questions in total. 2 were simple DSA questions, 2 were
                        from simple frontend and 3 were a bit complicated SQL queries. front end questions were about
                        giving shadow to text and placing text inside a view. SQL queries were asked involving 5+ tables
                        and hence made a complicated set of questions.
                        <br/>
                        <b>Verdict</b>: selected for the next round.
                        The results were declared in April and we were asked about our preferred roles before the
                        interviews began. ZS offers 3 roles for recruitment:
                        <ul>
                            <li>
                                Business Technology Solutions Associate(BTSA)
                            </li>
                            <li>
                                Business Operations Associate(BOA)
                            </li>
                            <li>
                                Decision Analytics Associate(DAA)
                            </li>
                        </ul>
                        I applied for the BTSA role. My interview dates came around 2 weeks before the interview day.
                        Technical Interview(19-05-2022): From this round, each team member was analyzed on their
                        performances as individuals. It was a simple interview that went for 30 minutes comprising of
                        questions from the profile, resume Human Resource(HR) and most focused of all, i.e. SQL.
                        Introduce yourselves.
                        <ol>
                            <li>
                                Tell me something about ZS Associates.
                            </li>
                            <li>
                                Why do you want to join ZS Associates?
                            </li>
                            <li>
                                What is a trigger?
                            </li>
                            <li>
                                Define all types of indexing.
                            </li>
                            <li>
                                What is a view.
                            </li>
                            <li>
                                Difference between Truncate and delete.
                            </li>
                            <li>How to create a table in SQL.</li>
                            <li>
                                Give an example of candidate key in a table.
                            </li>
                            <li>SQL query 1: two tables- Students and stipend(according to category), display the top 10
                                students having stipend ordered ascending according to their stipend.
                            </li>
                            <li>SQL query 2: remove any redundancy from the Q10.
                            </li>
                            <li>SQL query 3: Left Join and right join of 3 tables simultaneously.
                            </li>
                            <li>Verdict: selected for the next round.
                            </li>
                            <li>EBI + FIT Interview(02-06-2022): This round is particularly designed to check if the
                                interviewee is fit for the company or not, i.e. is he compatible with the motto of the
                                company or not? This round may comprise of Puzzles, Guesstimates, Brain Teasers, and
                                questions related to the resume submitted. This interview is taken by a Principal
                                Associate of the company.
                            </li>
                            <li>Introduce yourselves.
                            </li>
                            <li>Full form of ZS.
                            </li>
                            <li>The motto of ZS.
                            </li>
                            <li>Questions about Project.
                            </li>
                            <li>How to handle a client if he wants to change the project when you are at the brim of the
                                timeline decided for the project?
                            </li>
                            <li>What do you do except study?
                            </li>
                            <li>Guesstimate: Guess the total number of LITTIs cooked everyday in Patna.
                            </li>

                        </ol>

                        <b>Final Verdict</b>: Selected for the BTSA role.
                    </div>
                    <img
                        src="https://www.zs.com/content/dam/images/logos/ZS_Logo_RGB@4x.png"
                        alt="random"
                        className="zs_logo_image"
                    />
                </div>
            </React.Fragment>
        ),
    };
}

function article_1() {
    return {
        date: "7 May 2023",
        title: "How to use Leetcode efficiently?",
        description:
            "Leetcode is very important for all newbie Software Engineers, let us discuss on efficiency of it's usage for maximum output",
        style: ``,
        keywords: [
            "Leetcode usage",
            "Leetcode",
            "Kshitiz",
            "Kshitiz J",
            "Kshitiz Jha"
        ],
        body: (
            <React.Fragment>
                A few years ago, I was seeking a new job at top-tier tech companies, and I had stumbled upon LeetCode as a resource, and honestly I have to say that LeetCode is BY FAR the most effective tool that I've used to improve at interview-style algorithms problems. This is a short guide drawing upon my own experiences on how to maximize the value you get out of using LeetCode.
                <br/>
                The goal of this article is not to teach you how to scramble your way into a top tech company, but to help you learn how to acquire algorithmic problem solving skills, which in turn will help you get the jobs you want. We'll start with some general tips that apply pretty much to anything that you want to get better at:
                <br/>
                Consistency is key. You want to start as much in advance as you can, and do it daily. Doing it for one hour a day is better than doing it for seven hours on Sunday only.
                Focus on active improvement. This means that if you're on auto-pilot or if you're not focusing, then it's OK to just stop and come back later.
                Remember that everybody is different and there is no one-size-fits-all. So feel free to deviate from this (or any) guide.
                For generalist SWE roles, you should focus on the Algorithms type of problems. Years ago, these were the only problems, but since then, Database, Shell, and Concurrency have been added. So you should view only Algorithms problems in the problem set:

               <a href="https://leetcode.com/problemset/algorithms/">
                   algorithms for DSA
               </a><br/>

                This is going to be your "home base", so let's customize it.
                <br/>
                You can click the "Difficulty" header twice to sort it from easiest to hardest. Interesting enough, this also sorts them within each Easy/Medium/Hard category in reverse order by acceptance rate.
                Click the empty header in the first column to sort with the unsolved problems on top.
                Finally, you can optionally filter out the questions that are locked for non-premium users. One way is to run this script in your web browser console; you'd need to do it every time you refresh the page, though. Of course, it's a little sketchy to run Javascript you find online in your browser console, but it's pretty simple if you want to understand what it does. Alternatively, you can use a browser extension, such as Leetcode Enhancer for Chrome. (It's open source, too!)
                Now you're ready to go. Obviously the best thing you can do it just solve every single problem on LeetCode. If you do that, you're really good to go. But, unfortunately, nobody has unlimited time on their hands, so we're going to have to optimize a little.
                <br/>
                Start from easiest to hardest. You can start skipping questions if you feel like the problems are getting too easy for you.
                Start with problems that have an editorial already written. These are the ones with a little "document page" icon in the "Solution" column of the problem set. As an exercise to the reader, you could re-purpose the script above to filter only for problems that have a per-written editorial.
                Start with problems that have good reviews. While LeetCode is a pretty great platform, not all problems are created equal. If you open a problem, you can see how many people upvoted or downvoted a problem. I'd initially stay away from problems that have a worse than 2:1 ratio of upvotes to downvotes, and problems that have 4:1 or above are usually of fairly high quality. It's much easier to learn from the higher-rated problems.
                Eventually, you're going to find a problem that's too hard, and you'll get stuck. That's totally fine. In fact, it's absolutely fine (and perhaps even efficient) to give up on some problems. It's possible that it requires an algorithm or data structure that you haven't seen before, and there's no need for you to pull your hair out trying to re-discover an algorithm or data structure. Here are some tips for how to get un-stuck.
                <br/>
                First, if there is an editorial already written for the problem, start with that. These tend to be fairly high-quality and often include a well-written code solution.
                Next, open the "Discuss" tab for the problem, and read some of the posts. These vary wildly in quality: some people just post a solution; others go into great detail. Your mileage may vary here, but this is also often a helpful resource if you get stuck.
                Finally, you can Google the problem itself, and oftentimes other people will have posted solutions or written about it on third-party sites, like their personal blog or Github repo.
                Once you've gotten into the groove, and you feel mostly confident solving the problems on LeetCode, it's time to refine your skills.
                <br/>
                If you feel weaker in a certain algorithm, you can filter the problem set by "Tag". This is NOT recommended for general practice, since much of the actual problem-solving skill you want to have is the ability to identify the type of algorithm to solve a problem. So, if you have filtered by "Binary Search", you know the solution to the problem is probably going to be binary search.
                Go through some older problems, and make sure that you have found the optimal solution. Oftentimes, the LeetCode online judge will actually accept suboptimal solutions. If an O(N) solution exists, but you submitted an O(N log N) solution, most likely it's going to still pass. The percentiles for runtime/memory are actually a bit misleading so don't worry too much about that. The only time that it kind of helps if there are two very different runtimes, like O(N) vs O(N^2), and the runtime distribution will look bimodal.
                The weekly contests are a great way to see where you stack up against the rest of the community. Plus, they apply some time pressure, and usually give new problems that you haven't seen before.
                This is new and not available several years ago, but the new Mock Interview is actually really good for adding some time pressure. Unfortunately, there is no way to filter out previously solved problems, so you might get repeats of ones you've done before--but you can view this as an opportunity to revisit some of the older problems. Apparently, this can also help you identify areas of weakness.
                I've never used it, but hearing from others, I'd consider it to almost be "cheating" but LeetCode premium is actually pretty good if you're really in a crunch and want to see what questions companies tend to ask. I do not recommend studying for a specific company, since your goal should be to build up algorithmic problem solving skills, rather than memorizing the answers to a few known problems. However, if you are really in a time crunch, then this could be your best bet. (I'm recommending paying for LeetCode premium, and I'm not even sponsored by LeetCode, believe it or not! That's how good it is.)
                <br/>
                Finally, if you've got some money to spare, or have a nice friend or library who can lend you the book, I also strongly recommend "Cracking the Coding Interview". Many of those problems are also available on LeetCode (see this list), so you can actually use LeetCode as a complementary tool alongside the book. I would consider the book to be fairly entry-level, so if you're new to technical interviews, I'd recommend starting by going through the book, even before doing LeetCode full-time.

                Please feel free to leave comments if you have any questions, and I will be happy to answer them or update this post.
            </React.Fragment>
        ),
    };
}

const myArticles = [article_1, article_2];

export default myArticles;
