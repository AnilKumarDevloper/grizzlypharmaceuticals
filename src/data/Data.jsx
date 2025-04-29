//import product1 from "../assets/productImg/product1.webp";
//import product2 from "../assets/productImg/product2.webp";
//import product3 from "../assets/productImg/imh_3.webp";
import turinabol from '/src/assets/oral_products/turinabol.png';
import superdrol_mit from '/src/assets/oral_products/superdrol_mit.png';
import megadrol from '/src/assets/oral_products/megadrol.png';
import placeholder_image from '/src/assets/images/placeholder.jpg';

const product2 = "https://ap-nutreko.myshopify.com/cdn/shop/files/5_344637dd-5f9e-4e82-8d41-a98ba806c3c1.png?v=1730101740&width=720"
const product3 = "https://ap-nutreko.myshopify.com/cdn/shop/files/4_9f3069c4-dca7-429b-82ce-43958d3abfda.png?v=1730101690&width=720"
const product1 = "https://ap-nutreko.myshopify.com/cdn/shop/files/1_a535ad5e-044e-4495-b8ce-9d6731848d03.png?v=1730101563&width=720"

export const productData = {
    injectableProducts: [
      {
        id: "Ip1",
        name: "Boldenone Undecylenate",
        top_description: "<b className='text-white'>Boldenone Undecylenate 250MG/ML By Grizzly Pharmaceuticals,</b> Boldenone Undecylenate, often known by its trade name Equipoise, is an anabolic androgenic steroid derived from testosterone. " +
        "It enhances protein synthesis, nitrogen retention, and red blood cell count, improving muscle growth, repair, endurance, and oxygenation during intense workouts.",
        description:"",
         
        imageUrl: placeholder_image,
        titleText:"often known by its trade name Equipoise,",
        altText: "Boldenone Undecylenate",
        slug: "boldenone-undecylenate",
        concentration: "INJECTION 250MG/ML – 10ML VIAL",
        vial_size: "10mL",
        key_features_heading: "Key Features:",
        key_features: {
          boldenone_undecylenate:
            "<b className='text-white'>Boldenone Undecylenate:</b> Each vial provides a pharmaceutical-grade dose of 250mg/mL, ensuring purity and potency.",
          muscle_growth: "<b className='text-white'>Muscle Growth:</b> Ideal for individuals aiming to build substantial and well-defined muscle mass.",
          enhanced_endurance:"<b className='text-white'>Enhanced Endurance:</b> Supports improved stamina and oxygen delivery during training.",
          dosage:"<b className='text-white'>Dosage:</b> Typically ranges from 250–800mg per week in bodybuilding. Higher dosages may increase the risk of side effects.",
        },
        administration:
          "Administer via intramuscular injection. Consult a healthcare professional for proper dosing based on individual goals and experience.",
        potential_side_effects:
          "Potential side effects may include water retention, mood changes, or temporary suppression of natural testosterone production. Regular monitoring is advised.",
        quantity: "10mL multi-dose vial, ensuring an extended supply for continuous use.",
        source:
          "Manufactured by <b>Grizzly Pharmaceuticals</b>, adhering to strict pharmaceutical standards and undergoing rigorous third-party testing for maximum purity and effectiveness.",
        post_cycle_therapy:
          "Post cycle therapy (PCT) is a protocol followed after completing a cycle of anabolic steroids to support natural hormonal balance.",
        legal_disclaimer:
          "This product is intended for research and educational purposes only. The customer assumes full responsibility for proper handling and application.",
      },

      {
        id: "Ip2",
        name: "Masteron Propionate",
        top_description:"<b className='text-white'>Masteron Propionate 100MG/ML By Grizzly Pharmaceuticals,</b> Masteron Propionate, also known as Drostanolone Propionate or Masteron Propionate 100. Masteron Propionate is one of the most popular anabolic steroids available due to its powerful cutting abilities." +
          "If you have a low body fat percentage, Masteron can give your muscles a dry, grainy, and hard look. In addition, it does not aromatize, and in fact, one of its metabolites works as a " + 
          "<b>SERM</b> (selective estrogen receptor modulator), making it an excellent choice for those sensitive to the estrogenic side effects of other steroids and even to combat estrogenic sides from the aromatization of other compounds such as testosterone.",
        description: "The short ester attached allows"+
          "<b> Masteron propionate</b> to clear your body within days of cessation <br>"+
          "This DHT derivative doesn’t aromatize and even has mild anti-estrogen qualities, leading to fewer adverse side effects. With " +
          "<b>Masteron propionate,</b> you can bring out your best conditioning. Its attached short ester also makes it potentially suitable for female athletes also.",
          titleText:"Masteron Propionate, also known as Drostanolone",
        imageUrl: placeholder_image,
        altText: "Masteron Propionate",
        slug: "masteron-propionate",
        concentration: "INJECTION 100MG/ML – 10ML VIAL",
        vial_size: "10mL",
        administration: "Since Masteron Propionate 100 is a product that stays in the body for a very short time, it is usually injected every 2 days at the rate of 100 mg for men"+
        "For women, the 100 mg injection is usually done every 4 days.",
        potential_side_effects: "Generally well-tolerated. As a DHT derivative, may contribute to hair loss or acne in sensitive individuals. Does not cause estrogen-related side effects.",
        quantity: "10mL multi-dose vial, ensuring an extended supply for continuous use.",
        source: "Manufactured by <b>Grizzly Pharmaceuticals</b>, adhering to strict pharmaceutical standards and undergoing rigorous third-party testing for maximum purity and effectiveness.",
        post_cycle_therapy:"Post cycle therapy, or PCT, is a protocol you follow after (or “post”) completing a cycle of anabolic steroids, a type of performance-enhancing drug (PED).",
        legal_disclaimer: "This product is intended for research and educational purposes only. The customer assumes full responsibility for proper handling and application of this product.",
      },

      {
        id: "Ip3",
        name: "Nandrolone Decanoate",
        top_description:"<b className='text-white'>Boldenone Undecylenate 250MG/ML By Grizzly Pharmaceuticals,</b> Nandrolone Decanoate is a powerhouse in the world of bodybuilding and athletic enhancement. Revered for its potent abilities, this steroid has become a staple for athletes aiming for peak performance."+
        "<br> <b>Nandrolone Decanoate,</b> often recognized by its brand name <b>Deca-Durabolin,</b> is a powerhouse in the world of anabolic steroids. Renowned for its formidable muscle-building abilities, Like testosterone,"+ 
        "nandrolone exhibits relatively strong anabolic properties.",
        description: " Unlike testosterone, however, its tissue-building activity is accompanied by weak androgenic properties. Much of this has to do with the reduction of nandrolone " +
        "to a weaker steroid, dihydronandrolone, in the same androgen-responsive target tissues that potentiate the action of testosterone (by converting it to DHT).<br/> The mild properties of nandrolone decanoate have made it one of the most popular injectable steroids worldwide. ",
        titleText:"Nandrolone Decanoate is a powerhouse in the world",
        imageUrl: placeholder_image,
        altText: "Boldenone Undecylenate",
        slug: "Boldenone Undecylenate",
        concentration: "INJECTION 250MG/ML – 10ML VIAL",
        vial_size: "10mL",
        administration: "<b>Safety Guidelines & Adminstration:</b> <br> Recommended via intramuscular injection; consult a healthcare professional for proper dosing and administration.", 
        dosage: "The usual dosage for physique or performance-enhancing purposes is the range of 200-800mg per week, taken in cycles 8 to 12 weeks in length. This level is sufficient for most users to notice measurable gains in lean muscle mass and strength.",
        quantity: "10ML multi-dose vial, ensuring an extended supply for continuous use",
        source: "Manufactured by <b>Grizzly Pharmaceuticals</b>, adhering to strict pharmaceutical standards and undergoing rigorous third-party testing for maximum purity and effectiveness.",
        post_cycle_therapy:"Post cycle therapy, or PCT, is a protocol you follow after (or “post”) completing a cycle of anabolic steroids, a type of performance-enhancing drug (PED).",
        legal_disclaimer: "This product is intended for research and educational purposes only. The customer assumes full responsibility for proper handling and application of this product.",
      },

      {
        id: "Ip4",
        name: "Nandrolone Phenylpropionate (NPP)",
        top_description:"<b className='text-white'>Nandrolone Phenylpropionate 100MG/ML By Grizzly Pharmaceuticals, </b> NPP (Nandrolone phenylpropionate) perfectly suits those seeking quality muscle bulk gain. It gets into work fast and combines well with boldenone and short form testosterones. Many athletes use the product to eliminate painful sensations in joints. <br>" + 
                "With a half-life of around 2-3 days, it is a relatively much faster form of Nandro hard that perfectly suits shorter cycles. Due to its chemical structure nandrolone is weakly exposed to aromatase (only 20% of the aromatizing"+ 
                "activity of testosterone).",
        description: " However, not estrogenic effects are its main concern: nandrolone has a potent progestogenic activity (20% of progesterone). While binding to progestogenic pituitary receptors nandrolone causes increased production of prolactin, which in effect is very similar to estradiol."+ 
                "Nandrolone is known to relieve muscle pain and speed up the regeneration process of the muscles. <br/>This drug is usually stacked with other anabolic steroids to achieve long-lasting and fast-acting effects. We highly recommend always using nandrolone in a stack with testosterone.",
        titleText:"NPP (Nandrolone phenylpropionate) perfectly",
        imageUrl: placeholder_image,
        altText: "Nandrolone Phenylpropionate (NPP)",
        slug: "nandrolone-phenylpropionate",
        concentration: "INJECTION 100MG/ML – 10ML VIAL",
        vial_size: "10mL",
        dosage: "A sensible dosage for most athletes is between <b>100-400mg</b> per week for males, with a typical cycle lasting 8-12 weeks. A maximum of 16 weeks should not be exceeded. In order to minimize the virilization effects, female users should not exceed <b>50mg/week</b> for a maximum of 6 weeks.<br> Users should split their dose into 2-3 injections per week for maximum benefits.",
        quantity: "10ML multi-dose vial, ensuring an extended supply for continuous use.",
        source: "Manufactured by <b>Grizzly Pharmaceuticals</b>, adhering to strict pharmaceutical standards and undergoing rigorous third-party testing for maximum purity and effectiveness.",
        post_cycle_therapy: "Post cycle therapy, or PCT, is a protocol you follow after (or “post”) completing a cycle of anabolic steroids, a type of performance-enhancing drug (PED).",
        legal_disclaimer: "This product is intended for research and educational purposes only. The customer assumes full responsibility for proper handling and application of this product."
      },

      {
        id: "Ip5",
        name: "Primobolan Depot 200",
        subName: "Methenolone Enanthate",
        top_description:"<b className='text-white'>Methenolone Enanthate 200MG/ML by Grizzly Pharmaceuticals, </b> Methenolone Enanthate (or Primobolan Depot), is one of the most sought after, and hard to find steroid compounds on the market."+ 
        "Often underrated, Primobolan is a potent compound for both lean bulking and cutting.<br/>" + 
                "Being a dihydrotestosterone (DHT) derived anabolic steroid, it doesn’t have estrogenic side effects such as water retention or gynecomastia. It is usually considered a"+ 
                "mild steroid and can be run during a lean bulk or a cutting cycle.",
        description: " The lack of adverse side effects makes it one of the most popular compounds for both men and women."+ 
                "If you desire a hard, lean, next level physique. Primobolan is considered one of the safest anabolic steroids on the market and it carries an excellent safety rating to back" + 
                "this claim. In fact, this steroid has been used successfully to treat underweight children and premature infants without damage. <br/>It is also prescribed for osteoporosis and sarcopenia. However, the primary purpose of Primobolan is treating muscle wasting diseases and prolonged exposure to corticoid hormones.",
        imageUrl: placeholder_image,
        titleText:"Methenolone Enanthate (or Primobolan Depot),",
        altText: "Methenolone Enanthate",
        slug: "Methenolone Enanthate",
        concentration: "INJECTION 200MG/ML – 10ML VIAL",
        vial_size: "10mL",
        dosage: "<b>Dosage & Cycle Length:</b> <br> <b>Men</b> - 350-600 mg/week <br> <b>Women</b> - 25-100 mg/week 8-16 weeks",
        administration: "Recommended via intramuscular injection; consult a healthcare professional for proper dosing and administration.",
        quantity: "10ML multi-dose vial, ensuring an extended supply for continuous use.",
        source: "Manufactured by <b>Grizzly Pharmaceuticals</b>, adhering to strict pharmaceutical standards and undergoing rigorous third-party testing for maximum purity and effectiveness.",
        post_cycle_therapy: "Post cycle therapy, or PCT, is a protocol you follow after (or “post”) completing a cycle of anabolic steroids, a type of performance-enhancing drug (PED).",
        legal_disclaimer: "This product is intended for research and educational purposes only. The customer assumes full responsibility for proper handling and application of this product."
      },

      {
        id: "Ip6",
        name: "Stanozolol (Winstrol 100)",
        top_description:"<b className='text-white'>Stanozolol 100MG/ML By Grizzly Pharmaceuticals,</b> Stanozolol (also known as Winstrol) is a 17-alpha-alkylated derivative of dihydrotestosterone (DHT) with low androgenic qualities yet highly anabolic. Stanozolol is the second most widely"+ 
        "used oral steroid, succeeded in popularity only by methandienone.<br/>" + 
                "Stanozolol tablets have a short lifetime (about 9 hours) compared to injectable stanozolol.",
        description: " The injectable version of stanozolol differs from other injectable"+ 
                "anabolic steroids in being an aqueous suspension of fine particles of steroid, instead of being an oil solution of an esterified compound. The duration of"+ 
                "action is probably at least a week.<br/> Individual particles of stanozolol may remain at the injection site for extended periods of time. Although stanozolol is a DHT based compound,"+ 
                "its activity is much milder than this androgen in nature. As DHT derivative Stanozolol can`t convert into estradiol, hence aromatase inhibitors are not required when taking this compound."+ 
                "As a result stanozolol does not cause water retention. On the contrary, it possesses a diuretic effect. So, instead of bulk look winstrol produces a lean, quality look without excess subcutaneous water retention."+ 
                "This makes it an excellent steroid to use throughout cutting cycles", 
        imageUrl: placeholder_image,
        titleText:"Stanozolol (also known as Winstrol)",
        altText: "Stanozolol (Winstrol 100)",
        slug: "stanozolol-winstrol-100",
        concentration: "NJECTION 100MG/ML – 10ML VIAL",
        vial_size: "10mL",
        administration: "Recommended via intramuscular injection; consult a healthcare professional for proper dosing and administration.",
        quantity: "10ML multi-dose vial, ensuring an extended supply for continuous use.",
        source: "Manufactured by <b>Grizzly Pharmaceuticals</b>, adhering to strict pharmaceutical standards and undergoing rigorous third-party testing for maximum purity and effectiveness.",
        post_cycle_therapy: "Post cycle therapy, or PCT, is a protocol you follow after (or “post”) completing a cycle of anabolic steroids, a type of performance-enhancing drug (PED).",
        legal_disclaimer: "This product is intended for research and educational purposes only. The customer assumes full responsibility for proper handling and application of this product."
      },

      {
        id: "Ip7",
        name: "Testosterone Cypionate",
        top_description:"<b className='text-white'>Testosterone Cypionate 250MG/ML by Grizzly Pharmaceuticals</b> Testosterone Cypionate 250MG/ML by Grizzly Pharmaceuticals is a powerful and long-acting testosterone ester designed to enhance muscle growth, optimize performance," + 
        "and support TRT protocols.<br/> Recognized for its sustained-release formula and high bioavailability, this compound is ideal for increasing strength, improving recovery,"+ 
        "and maintaining peak hormonal balance.",
        description: " Whether used for testosterone replacement therapy (TRT) or performance enhancement, Testosterone Cypionate provides consistent and reliable anabolic benefits.",
        details:"Dosage: Each vial contains 250MG/ML of Testosterone Cypionate, providing a stable testosterone release over time. Typical dosing ranges from <b>250-750MG</b> per week, depending on individual protocol.",
        imageUrl: placeholder_image,
        titleText:"Testosterone Cypionate 250MG/ML by Grizzly Pharmaceuticals",
        altText: "Testosterone Cypionate",
        slug: "testosterone-cypionate",
        concentration: "INJECTION 250MG/ML – 10ML VIAL",
        vial_size: "10mL",
        key_features_heading: "Key Features of TESTOSTERONE CYPIONATE 250MG/ML: ",
        key_features: {
          boldenone_undecylenate: "<b className='text-white'>Long-Acting Formula: </b> Sustained testosterone release reduces injection frequency.",
          muscle_growth: "<b className='text-white'>Optimized Muscle Growth: </b>  Supports lean muscle mass, strength, and endurance",
          enhanced_endurance:"<b className='text-white'>TRT Enhancement: </b> Ideal for individuals seeking stable testosterone levels and hormonal balance.", 
          dosage: "<b className='text-white'>Improved Recovery & Energy: </b> Enhances stamina and reduces post-workout fatigue."
        },
        potential_side_effects:"May include water retention, mood changes, or temporary suppression of natural testosterone production. Regular monitoring is advised for optimal results",
        precautions:"Not suitable for individuals with pre-existing cardiovascular conditions or hormone-related disorders. Always seek professional guidance before use.",
        administration: "<b>Safety Guidelines:</b><br> Recommended via intramuscular injection; consult a healthcare professional for proper dosing and administration.",
        quantity: "10ML multi-dose vial, ensuring an extended supply for continuous use.",
        source: "Manufactured by <b>Grizzly Pharmaceuticals</b>, adhering to strict pharmaceutical standards and undergoing rigorous third-party testing for maximum purity and effectiveness.",
        post_cycle_therapy: "Post cycle therapy, or PCT, is a protocol you follow after (or “post”) completing a cycle of anabolic steroids, a type of performance-enhancing drug (PED).",
        legal_disclaimer: "This product is intended for research and educational purposes only. The customer assumes full responsibility for proper handling and application of this product."
      },

      {
        id: "Ip8",
        name: "Testosterone Enanthate",
        slug: "testosterone-enanthate", 
        top_description:"<b className='text-white'>Testosterone Enanthate 250MG/ML By Grizzly Pharmaceuticals, </b> testosterone Enanthate is an injectable steroid containing 250MG/ML long-acting testosterone ester"+
        "<br>Testosterone Enanthate is one of the most commonly used testosterones for the treatment of low testosterone and it’s anabolic properties.",
        description: " It is also extremely popular in performance enhancing circles"+ 
        "<b>Testosterone Enanthate</b> is one of the most affordable anabolic steroids on the market, highly versatile and well tolerated by most all adult men, perfect for both the first time as well as"+ 
        "long-term steroid users.<br> In a performance capacity, while many will combine other anabolic steroids with their",
        concentration: "INJECTION 250MG/ML – 10ML VIAL",
        imageUrl: placeholder_image,
        titleText:"Testosterone Enanthate is an injectable steroid containing",
        vial_size: "10mL", 
        quantity: "10ML multi-dose vial, ensuring an extended supply for continuous use.",
        packaging: "Delivered in a sealed, tamper-proof vial, ensuring sterility, potency, and product integrity.",
        source: "Manufactured by <b>Grizzly Pharmaceuticals,</b> adhering to strict pharmaceutical standards and undergoing rigorous third-party testing for maximum purity and effectiveness.",
        testosterone_nanthate: "It can be used alone. This is a base foundational anabolic steroid that can promote radical changes in a physique all on its own. Equally"+ 
        "important, while tremendously effective the price of this steroid is more than affordable giving it even more appeal than it already has. Regardless of your level of experience you"+ 
        "cannot go wrong with <b>Testosterone Enanthate</b>.",
        dosage_instructions: "Bodybuilders and athletes who inject Testosterone Enanthate for performance enhancement purposes will inject between 200-500mg per week."+ 
        "This range is very common if the hormone is only being used to combat natural testosterone suppression caused by the use of other anabolic steroids. To get the true anabolic,"+ 
        "maximum benefits of this steroid, those in the fitness industry will inject between 250-500mg per week. Users who inject this dosage indicate that the chances of side effects are minimal and "+ 
        "those who experience side effects find them easy to control. Such doses will normally be split into two equal doses per week for a total weekly dosing. Those who have been using both oral and injectable steroids"+ 
        "for a good part of their lives will inject more than 500mg per week; however, many men will find the 500mg range to be all they need.",
        testosterone_enanthate2: "Carries a half-life of 8-10 days, it needs to be injected at a minimum of once per week, although if you expect to get the most out of this steroid on a"+ 
        "performance enhancement basis, it should be injected twice per week with the weekly dosage split evenly between administrations. An example of this would be to split the 500mg per week dosage of"+ 
        "Testosterone into a 250mg injection on Monday and 250mg injection on Thursday every week.",
        post_cycle_therapy: "Post cycle therapy, or PCT, is a protocol you follow after (or “post”) completing a cycle of anabolic steroids, a type of performance-enhancing drug (PED).",
        legal_disclaimer: "This product is intended for research and educational purposes only. The customer assumes full responsibility for proper handling and application of this product."
      },

      {
        id: "Ip9",
        name: "Testosterone Propionate",
        slug: "testosterone-propionate",
        imageUrl: placeholder_image,
        top_description:"<b className='text-white'>Testosterone Propionate 250MG/ML By Grizzly Pharmaceuticals,</b> testosterone propionate is an injectable steroid containing 100MG/ML short-acting testosterone ester  "+ 
        " <b>Testosterone Propionate 100</b> is an injectable steroid, contains 100MG/Per ML of"+
        "<b>Testosterone Propionate</b> This formulation is known for its fast action, with the Propionate ester ensuring a rapid release within 2-3 days.<br/> This necessitates a more frequent injection schedule, such as daily or every other day, to maintain stable blood levels."+
        "<br> <br><b className='text-white'>Advantages of Testosterone Propionate 100</b> The quick action of Testosterone Propionate 100 makes it a preferred choice for athletes subject to testing, as it clears the body rapidly post-use.",
        description: " Many bodybuilders & athletes also find that"+
        "Propionate induces fewer estrogen-related side effects like bloat compared to other testosterone esters. Testosterone is the most prevalent anabolic hormone and is considered the base steroid"+ 
        "for most cycles. It is both anabolic and androgenic, leading to dramatic gains in muscle size and strength, enhanced well-being, and increased libido and sex drive." +
        "<br><br><b className='text-white'>Managing Estrogenic Side Effects</b> Testosterone can easily aromatize, leading to estrogen buildup. To combat this, bodybuilders"+ 
        "often include anti-estrogens like Anastrozole, Proviron, or Tamoxifen. For those highly sensitive or using higher doses, stronger anti-estrogens such as Letrozole or Exemestane may be more suitable",
        concentration: "INJECTION 100MG/ML – 10ML VIAL",
        titleText:"Testosterone propionate is an injectable steroid",
        vial_size: "10mL",
        administration: "Recommended via intramuscular injection every day or every other day for stable hormone levels.",
        quantity: "10ML multi-dose vial, ensuring an extended supply for continuous use.",
        source: "Manufactured by Grizzly Pharmaceuticals, adhering to strict pharmaceutical standards and undergoing rigorous third-party testing for maximum purity and effectiveness.", 
       
        dosage: "Typically used at 400–800mg per week for 8–20 weeks depending on goals.",
        post_cycle_therapy: "Post cycle therapy, or PCT, is a protocol you follow after (or “post”) completing a cycle of anabolic steroids, a type of performance-enhancing drug (PED).",
        legal_disclaimer: "This product is intended for research and educational purposes only. The customer assumes full responsibility for proper handling and application of this product."
      },

      {
        id: "Ip10",
        name: "Trenbolone Acetate",
        slug: "trenbolone-acetate",
        imageUrl: placeholder_image,
        top_description:"<b className='text-white'>Trenbolone Acetate 100MG/ML By Grizzly Pharmaceuticals,</b> trenbolone acetate is an injectable compound containing 100MG/ML.Trenbolone Acetate is an anabolic androgenic steroid (AAS) medication. Anabolic-Androgenic"+ 
        "steroids or AAS are steroids that contain natural occurring androgens like testosterone as well as man-made or synthetic androgens mimicking the effects of testosterone. <br>"+ 
        "<b>Trenbolone Acetate</b> or Tren has a biological half-life of 3 days – meaning it will take 3 days before the amount of concentration of the trenbolone acetate substance introduced to the body"+ 
        "to be reduced by 50% of the initial starting dose.",
        description: "Tren anabolic steroid injections normally take a few days to start working and show their effects,"+ 
        "although some work in a few hours post-injection.<br/> <b>Trenbolone Acetate</b> or “Tren” works by agonizing the action of the androgen receptor <b>(AR)</b> thus promoting anabolic and androgenic"+ 
        "activity or development of male characteristics in the body. The androgen receptor (AR), scientifically named as NR3C4 or nuclear receptor subfamily 3,"+ 
        "group C, member 4), is classified as a nuclear receptor. AR or androgen receptor works when activated by binding to any androgenic hormones, in the case"+ 
        "of AAS, it binds to testosterone in the cytoplasm of the cell then moving right into the nucleus.<br/>" +
        "<br><b>Tren Benefits</b><br> Trenbolone Acetate or Trenbolone is often preferred because it can help to stabilize blood levels better. Athletes will choose this option to gain muscle mass and strength while"+ 
        "on a particularly strict diet Furthermore, the human body finds it much easier to absorb high levels of injected <b>Tren A</b> rather than the <b>Tren E</b> form."+
        "For noobs testing the waters for AAS use, Tren A or Trenbolone Acetate or Trenbolone Acetate is the better option as it peaks faster and exits the body quicker than Tren E or Trenbolone Enanthate.",
        titleText:"Trenbolone acetate is an injectable compound containing",
        concentration: "INJECTION 100MG/ML – 10ML VIAL",
        vial_size: "10mL", 
        quantity: "10ML multi-dose vial, ensuring an extended supply for continuous use.",
        source: "Manufactured by Grizzly Pharmaceuticals, adhering to strict pharmaceutical standards and undergoing rigorous third-party testing for maximum purity and effectiveness.",  
        post_cycle_therapy: "Post cycle therapy, or PCT, is a protocol you follow after (or “post”) completing a cycle of anabolic steroids, a type of performance-enhancing drug (PED).",
        legal_disclaimer: "This product is intended for research and educational purposes only. The customer assumes full responsibility for proper handling and application of this product."
      },

      {
        id: "Ip11",
        name: "Trenbolone Enanthate",
        slug: "trenbolone-enanthate",
        imageUrl: placeholder_image, 
        top_description: "<b className='text-white'>Trenbolone Enanthate 200MG/ML By Grizzly Pharmaceuticals</b> trenbolone enanthate is an injectable compound containing 200MG/ML. Trenbolone Enanthate has androgenic (promotes the development of male characteristics) and anabolic"+ 
        "(enhances muscle growth) effects. Due to the structural differences from the testosterone, tren enanthate has 5 times more binding capacity to the androgenic receptors. This better binding affinity doesn’t indicate the anabolic effect comparison of the two compounds.",
        titleText:"Trenbolone enanthate is an injectable compound containing",
        concentration: "INJECTION 200MG/ML – 10ML VIAL",
        vial_size: "10mL",
        potential_side_effects:": Tren Enan 200 supports rapid muscle development, making it a top choice for bodybuilders."+
        "<br><br><b>Strength Enhancement: This product can significantly improve physical strength, helping you break through plateaus</b>",
        administration: "Recommended via intramuscular injection, typically 2x per week (e.g., Monday and Thursday). Always consult a healthcare professional before beginning any cycle.",
        dosage_and_instructions: "The standard dose of trenbolone enanthate products is in the 200-400 mg range. This dose is injected two times a week in the proportion of 100-200 mg per injection."+ 
        "Tren Enan 200 should be administered under the guidance of a healthcare professional, following prescribed dosages and cycle lengths. It is intended for experienced users who are committed to their muscle-building journey.",
        muscle_definition: "Tren Enan 200 is perfect for individuals aiming to achieve a muscular and sculpted physique."+
        "<br><br><b className='text-white'>Quality Anabolic Solution:</b> You can trust Tren Enan 200 for reliable and consistent anabolic effects. Tren Enan 200 is a potent and reliable Trenbolone Enanthate solution, offering quality, purity, and effectiveness. Whether you're striving for substantial muscle growth, increased strength, or a defined physique.",
        quantity: "10ML multi-dose vial, ensuring an extended supply for continuous use.",
        source: "Manufactured by Grizzly Pharmaceuticals, adhering to strict pharmaceutical standards and undergoing rigorous third-party testing for maximum purity and effectiveness.",
        post_cycle_therapy: "Post cycle therapy, or PCT, is a protocol you follow after (or “post”) completing a cycle of anabolic steroids, a type of performance-enhancing drug (PED).",
        legal_disclaimer: "This product is intended for research and educational purposes only. The customer assumes full responsibility for proper handling and application of this product."
      }

    ],
  
    oralProducts: [
      {
        id: "op1",
        name: "Megadrol 100 mg / 35 Capsules",
        imageUrl: megadrol,
        top_description:"Megandrol is an extremely strong and powerful combination developed by <b className='text-white'>Grizzly Pharmaceuticals. </b>"+
        "A huge dose of the most effective substances in the highest possible concentration and purity. Stop tolerating products that simply don't work. Our revolutionary formula delivers unquestionable results, unlike anything you've ever"+ 
        "tried and experienced. Their synergy causes a massive increase in testosterone, libido, strength and energy."+
        "",
        description:"<ul><li><b className='text-white'>Epistane,</b> a potent anti-estrogen compound that binds to androgen receptors with unparalleled strength. This powerhouse is 12 times more potent than testosterone</li>"+ 
        "<li><b className='text-white'>Trendione,</b>  is a prohormone that transforms into the powerhouse anabolic steroid trenbolone, boasting ten times the androgenic potency of testosterone. Ideal for advanced users, Trenavar promotes lean muscle growth, enhanced muscle density, and significant fat loss. Experience muscle gains of approximately 5-7 kg per cycle with this formidable supplement. </li>"+ 
        "<li><b className='text-white'>1-Andro,</b> a non-methylated prohormone that enhances muscle mass and strength. Converting to 1-testosterone, which is seven times more anabolic than traditional testosterone, this compound delivers impressive results with minimal side effects.</li></ul>",
        titleText:"Megandrol is an extremely strong",
        precautions:"Consult a healthcare professional before use, monitor liver function and blood work and may interact with medications",
        user_guidelines_heading:"User Guidelines",
        user_guidelines:{
          guid_1:"Consult a healthcare professional before starting Turinabol.",
          guid_2:"Follow proper dosing and cycle length guidelines",
          guid_3:"Monitor side effects and adjust the cycle as needed",
          guid_4:"Implement proper PCT and on-cycle support."
        },
        
        legal_disclaimer:"Please note that this product is intended for research purposes and should not be used for non-scientific reasons or without the supervision of a qualified professional",
      
      },
      {
        id: "op2",
        name: "Superdrol + M1T 35 mg / 50 Capsules",
        imageUrl: superdrol_mit,
        top_description:"Superdrol, also known as Methasterone, is a potent anabolic compound that offers significant benefits for muscle growth and athletic performance. Its benefits include rapid muscle"+ 
        "hypertrophy, increased strength, enhanced endurance, and improved recovery. Methyl-1-Testosterone was researched in 1962. It is also known as M1T. M1T had a good ratio of anabolic to androgenic"+ 
        "effect. So, it was a promising compound. Like other compounds. M1T or Methyl-1-Testosterone can be utilized for gaining and cutting purposes. It is cycled with any anabolic compound that includes" + 
        "the highly popular testosterone, Trenbolone, Oral Turinabol, Superdeol, Oxandrolone, Equipoise, Stanozolol, Anadrol and Halostestin."+
        "<br><br> Blend of Superdrol + M1T benefits in rapid muscle growth, athletic performances and improved recovery.",
        titleText:"Superdrol, also known as Methasterone",
        precautions:"Consult a healthcare professional before use, monitor liver function and blood work and may interact with medications",
        user_guidelines_heading:"User Guidelines",
        user_guidelines:{
          guid_1:"Consult a healthcare professional before starting Superdrol+M1T",
          guid_2:"Follow proper dosing and cycle length guidelines",
          guid_3:"Monitor side effects and adjust the cycle as needed",
          guid_4:"Implement proper PCT and on-cycle support."
        },
        legal_disclaimer:"Please note that this product is intended for research purposes and should not be used for non-scientific reasons or without the supervision of a qualified professional",
      },
      {
        id: "op3",
        name: "Turinabol 25 mg / 50 Capsules",
        imageUrl: turinabol,
        top_description:"<b className='text-white'>Grizzly Pharmaceuticals</b> Chlorodehydromethyltestosterone is a potent derivative of Dianabol. This oral steroid is structurally a cross between methandrostenolone and clostebol"+
         "(4-chlorotestosterone), having the same base structure as Dianabol with the added 4-chloro alteration of clostebol. This alteration makes chlorodehydromethyltestosterone a milder cousin of Dianabol, the new steroid"+ 
         "displaying no estrogenic and a much less androgenic activity in"+ "comparison to its more famous counterpart. The anabolic activity of chlorodehydromethyltestosterone is somewhat lower than that of Dianabol as well, but it does"+ 
         "maintain a much more favorable balance of anabolic to androgenic effect. This means that at any given level of muscle-building activity, chlorodehydromethyltestosterone will be less likely to produce androgenic side effects."+ 
         "Turinabol treatment does not substitute the basic therapy it is used as a secondary helpful therapy. Turinabol therapy period depends on the patient's responsiveness and the evolution of possible side effects. As an androgenic and anabolic"+ 
         "steroid, Turinabol interacts with the cell membranes and interacts with cytoplasmic receptors and the formed band is transported into the nucleus where it acts on specific nuclear receptors.",
         description:"<b>No Estrogenic Side Effects</b> <br/>" +
          "A big benefit of Tbol is that it doesn't aromatize at all so there are no estrogen related side"+
          "effects to worry about. This removes some of the biggest concerns that steroid users have by"+
          "not causing any water retention, high blood pressure or male breast tissue enlargement. Other"+
          "side effects that may occur:",
         titleText:"This oral steroid is structurally ",
         potential_side_effects:"A big benefit of Tbol is that it doesn't aromatize at all so there are no estrogen related side effects to worry about. This removes some of the biggest concerns that steroid users have by"+ 
        "not causing any water retention, high blood pressure or male breast tissue enlargement. Other side effects that may occur",
        precautions:"Consult a healthcare professional before use, monitor liver function and blood work and may interact with medications",
        user_guidelines_heading:"User Guidelines",
        user_guidelines:{
          guid_1:"Consult a healthcare professional before starting Turinabo",
          guid_2:"Follow proper dosing and cycle length guidelines",
          guid_3:"Monitor side effects and adjust the cycle as needed.",
          guid_4:"Implement proper PCT and on-cycle support."
        },
        legal_disclaimer:"Please note that this product is intended for research purposes and should not be used for non-scientific reasons or without the supervision of a qualified professional",
      },
    ],
  };
  
  export const aboutData = {
    heading: "About Our Company",
    metaDescription: "Learn more about our team and mission.",
    metaTitle: "About Us",
  };
  
  export const homeData = {
    metaTitle: "Home - My Shop",
    metaDescription: "Welcome to our online store.",
    heading: "Welcome to My Shop",
    heroText: "Discover amazing products!",
  };
  