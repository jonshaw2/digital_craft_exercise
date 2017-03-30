
--Select technolgy used by personal website
select
	project.name, tech.name
from
	project_uses_tech
inner join
	project on project.id = project_uses_tech.project_id
inner join
	tech on tech.id = project_uses_tech.tech_id
where project.name = 'Personal Website';

--perform a left outer join from tech table to the proejct_uses_tech table, which tech has no associated project?
select
	project.name, tech.name
from
	tech

left outer join
	project_uses_tech on tech.id = project_uses_tech.tech_id

left outer join
	project on project.id = project_uses_tech.project_id

--count technology used on each project
select
	project.name, count(tech.name)
from
	project

left outer join
	project_uses_tech on project.id = project_uses_tech.project_id

left outer join
	tech on tech.id = project_uses_tech.project_id

group by project.name;

--join tech and project, which project has no associated tech
select
	project.name, tech.name
from
	project

left outer join
	project_uses_tech on project_uses_tech.project_id = project.id

left outer join
	tech on tech.id = project_uses_tech.tech_id

where tech.name is NULL;
-- count number of times each project uses each tech
select
	count(project.name), tech.name
from
	tech

left outer join
	project_uses_tech on tech.id = project_uses_tech.tech_id

left outer join
	project on project.id = project_uses_tech.project_id

group by tech.name

-- List all the distinct techs that are used by at least one project.
select
	tech.name, count(project.name)
from
	tech

left outer join
	project_uses_tech on project_uses_tech.tech_id = tech.id

left outer join
	project on project.id = project_uses_tech.project_id



group by tech.id

HAVING count(project.name) >= 1;

-- List tech that are not used

select
	tech.name, count(project.name)
from
	tech

left outer join
	project_uses_tech on project_uses_tech.tech_id = tech.id

left outer join
	project on project.id = project_uses_tech.project_id



group by tech.id

HAVING count(project.name) = 0;

-- order tech by project used desc
select
	tech.name, count(project.name)
from
	tech

left outer join
	project_uses_tech on project_uses_tech.tech_id = tech.id

left outer join
	project on project.id = project_uses_tech.project_id



group by tech.id

ORDER BY count(project.name) DESC;
